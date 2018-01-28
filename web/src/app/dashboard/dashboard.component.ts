import { Component, Input, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import * as moment from "moment";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { FailureRoller } from "./failure-roller/failure-roller.component";
import { SystemSummary } from "./system-summary/system-summary.component";
import { SystemDetail } from "./system-detail/system-detail.component";
import { SystemsRpcGraph, GraphLayout, BoundingBox } from "../diagram/systems-rpc-graph/graph.component";
import { UserService } from "../common/user/user.service";
import { SystemStatsService } from "../common/system-stats/system-stats.service";
import { SystemFailureService } from "../common/system-failure/system-failure.service";
import { SocketService } from "../common/socket.service";
import { environment } from "../../environments/environment";

import { SystemStats, NodeInfo, LinkInfo } from "../common/system-stats/system-stats.vo";
import { LayoutDto, LayoutBoxDto } from "../common/user/layout.dto";
import { SystemSelectedEvent } from "../diagram/systems-rpc-graph/system-selected.event";

@Component({
    selector: "ow-dashboard",
    templateUrl: "dashboard.template.html",
    styleUrls: [ "dashboard.style.scss" ],
    animations: [
        trigger("detailState", [
            state("hidden", style({
                display: "none",
                opacity: 0,
                transform: "scale(0.6)"
            })),
            state("shown", style({
                display: "block",
                opacity: 1,
                transform: "scale(1)"
            })),
            transition("hidden => shown", [
                style({ display: "block" }),
                animate("200ms ease-in")
            ]),
            transition("shown => hidden", animate("200ms ease-out"))
        ])
    ]
})
export class Dashboard implements OnInit, OnDestroy {

    private systemStats: SystemStats = null;
    private detailState = "hidden";
    @ViewChild("failureRoller") private failureRoller: FailureRoller;
    @ViewChild("systemSummary") private systemSummary: SystemSummary;
    @ViewChild("systemDetail") private systemDetail: SystemDetail;
    @ViewChild("diagram") private diagram: SystemsRpcGraph;
    private layoutInputCtrl: FormControl = new FormControl();
    private layouts: Array<LayoutDto> = [ ];
    private selectedLayout: LayoutDto | "all" = "all";
    private currentLayout: GraphLayout = null;
    private updateStatsTimeoutId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private systemStatsService: SystemStatsService,
        private systemFailureService: SystemFailureService,
        private socketService: SocketService
    ) { }

    ngOnInit() {
        const loadStats = () => {
            console.log("updating stats...");
            this.systemStatsService.getSystemStats()
            .then((systemStats: SystemStats) => {
                this.updateStats(systemStats);
            })
            .then(null, (err) => {
                console.log(err);
                console.log("failed to load system stats");
            });
            // this.updateStatsTimeoutId = window.setTimeout(loadStats, 120000);
        };
        loadStats();

        // load layouts
        this.userService.getUserLayouts()
        .then((layouts: Array<LayoutDto>) => {
            this.layouts = layouts;
        });
        this.layoutInputCtrl.valueChanges.subscribe((layout: LayoutDto | "all") => {
            if (layout === undefined) return;
            if (layout === "all") this.currentLayout = null;
            else this.currentLayout = this.fromVo(layout);
        });

        // load system failures
        this.systemFailureService.getSystemFailure({ })
        .then((systemFailures) => systemFailures.map(this.failureRoller.addLogItem));

        this.socketService.subscribe(this.socketService.getSystemFailureTopic(), this.failureRoller.addLogItem);
        this.socketService.subscribe(this.socketService.getSystemStatsTopic(), (data) => {
            const stats = new SystemStats(data);
            this.updateStats(stats);
        });

    }

    ngOnDestroy() {
        this.socketService.unsubscribe(this.socketService.getSystemFailureTopic());
        this.socketService.unsubscribe(this.socketService.getSystemStatsTopic());
        window.clearTimeout(this.updateStatsTimeoutId);
    }

    testDiagram() {

        let removedNodes: Set<string> = new Set<string>();

        // randomly change & remove nodes & links
        this.systemStats.nodes = this.systemStats.nodes.filter((node: NodeInfo) => {
            if (Math.random() > 0.2) {
                node.rpm = [ Math.round(Math.random() * 100000), Math.round(Math.random() * 100000), Math.round(Math.random() * 100000)];
                node.fpm = [ Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)];
                return true;
            } else {
                removedNodes.add(node.name);
                return false;
            }
        });
        this.systemStats.links = this.systemStats.links.filter((link: LinkInfo) => {
            if (!removedNodes.has(link.source) && !removedNodes.has(link.target)) {
                link.rpm = [ Math.round(Math.random() * 100000), Math.round(Math.random() * 100000), Math.round(Math.random() * 100000)];
                link.fpm = [ Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)];
                return true;
            } else {
                return false;
            }
        });

        // randomly add nodes & links
        for (let i = 0; i < 5; i++) {
            if (Math.random() < 0.8) continue;
            let nodeName = `test-${ Math.round(Math.random() * 1000) }`;
            this.systemStats.nodes.forEach((node: NodeInfo) => {
                if (Math.random() < 0.5) {
                    this.systemStats.links.push({
                        source: nodeName,
                        target: node.name,
                        rpm: [ Math.round(Math.random() * 100000), Math.round(Math.random() * 100000), Math.round(Math.random() * 100000)],
                        fpm: [ Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
                    });
                }
            });
            this.systemStats.nodes.push({
                name: nodeName,
                rpm: [ Math.round(Math.random() * 100000), Math.round(Math.random() * 100000), Math.round(Math.random() * 100000)],
                fpm: [ Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
            });
        }

        this.diagram.update();
    }

    private fromVo(vo: LayoutDto): GraphLayout {
        let result: GraphLayout = {
            boundingBoxes: new Map<string, BoundingBox>(),
            nodeBoxMap: new Map<string, string>()
        };
        vo.boxes.forEach((box: LayoutBoxDto, id: string) => {
            result.boundingBoxes.set(id, new BoundingBox(box.x, box.y, box.width, box.height));
        });
        vo.nodes.forEach((boxId: string, name: string) => {
            result.nodeBoxMap.set(name, boxId);
        });
        return result;
    }

    updateStats = (systemStats: SystemStats) => {
        this.systemStats = systemStats;
        this.systemSummary.summarize(systemStats);
    }

    showDetail(event: SystemSelectedEvent) {
        if (event.eventType === "stats") {
            this.detailState = "shown";
            this.systemDetail.showDetail(event.system);
        } else {
            let begin: number;
            let end: number;
            let now = moment();
            if (event.eventType === "stats_1h") {
                end = now.unix();
                begin = end - 3600;
            } else if (event.eventType === "stats_1d") {
                now.hours(0);
                now.minutes(0);
                now.seconds(0);
                now.milliseconds(0);
                begin = now.unix();
                now.days(now.days() + 1);
                end = now.unix();
            } else {
                return;
            }
            this.router.navigate([ "history"], {
                queryParams: {
                    system: event.system,
                    begin: begin,
                    end: end
                }
            });
        }

    }

    hideDetail() {
        this.detailState = "hidden";
    }

    animationDone(event) {
        if (event.toState === "hidden")
            this.systemDetail.clearDetail();
        else
            this.systemDetail.drawDiagram();
    }

}
