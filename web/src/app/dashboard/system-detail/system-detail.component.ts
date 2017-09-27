import { Component, Output, ViewChild, EventEmitter, OnInit } from "@angular/core";
import { RequestsTimeChart } from "../../diagram/requests-time-chart/chart.component";

import { SystemInfoService } from "../../common/system-info/system-info.service";
import { SystemFailureService } from "../../common/system-failure/system-failure.service";

import { SystemFailureDto } from "../../common/system-failure/system-failure.dto";
import { RequestsDataItem } from "../../diagram/requests-time-chart/data.vo";
import { SystemInfoDetailVo, SystemNodeInfo } from "../../common/system-info/system-info.vo";

interface SystemDetailVo {
    name: string;
    rpm: number;
    fpm: number;
    hosts: Array<string>;
}

@Component({
    selector: "ow-system-detail",
    templateUrl: "system-detail.template.html",
    styleUrls: [ "system-detail.style.scss" ]
})
export class SystemDetail implements OnInit {

    @Output() private exit = new EventEmitter<void>();
    private systemName: string;
    private systemInfo: SystemDetailVo;
    private logItems: Array<SystemFailureDto>;
    private requestsData: Array<RequestsDataItem> = null;
    private requestsDataDelayedHolder: Array<RequestsDataItem> = null;
    private delayNeeded = false;

    constructor(
        private systemInfoService: SystemInfoService,
        private systemFailureService: SystemFailureService
    ) { }

    ngOnInit() {
        this.clearData();
    }

    private clearData() {
        this.systemInfo = {
            name: "N/A",
            rpm: 0,
            fpm: 0,
            hosts: [ "N/A" ]
        };
        this.requestsData = null;
        this.logItems = null;
    }

    doExit(exit) {
        this.exit.emit();
    }

    private nodeSum(nodes: Array<SystemNodeInfo>) {
        let result = {
            rpm: 0,
            fpm: 0,
            hosts: [ ]
        };
        for (let node of nodes) {
            result.rpm += node.rpm;
            result.fpm += node.fpm;
            if (node.name !== "" && result.hosts.indexOf(node.name) < 0) result.hosts.push(node.name);
        }
        if (result.hosts.length === 0) result.hosts.push("N/A");
        return result;
    }

    showDetail(systemName: string) {
        this.delayNeeded = true;
        this.systemName = systemName;
        if (systemName === null) return;
        let systemInfo: SystemDetailVo = {
            name: systemName,
            rpm: 0,
            fpm: 0,
            hosts: [ ]
        };
        let now: number = Math.round(new Date().getTime() / 1000);
        this.systemInfoService.getSystemInfoDetail(systemName, now - 3600, now)
        .then((data) => {
            let requestsData = [ ];
            if (data.length >= 2) {
                let latest = 0;
                let latestSum;

                for (let item of data) {
                    let sum = this.nodeSum(item.nodes);
                    requestsData.push({
                        time: item.time,
                        rpm: sum.rpm,
                        fpm: sum.fpm
                    });
                    if (item.time > latest) {
                        latest = item.time;
                        latestSum = sum;
                    }
                }
                systemInfo.rpm = latestSum.rpm;
                systemInfo.fpm = latestSum.fpm;
                systemInfo.hosts = latestSum.hosts;
                this.systemInfo = systemInfo;
            }
            if (this.delayNeeded) this.requestsDataDelayedHolder = requestsData;
            else this.requestsData = requestsData;
        });
        this.systemFailureService.getSystemFailure({
            system: systemName,
            begin: now - 3600,
            end: now
        })
        .then((data) => {
            this.logItems = data;
        });
    }

    clearDetail() {
        this.clearData();
        this.requestsData = null;
    }

    drawDiagram() {
        this.requestsData = this.requestsDataDelayedHolder;
        this.requestsDataDelayedHolder = null;
        this.delayNeeded = false;
    }

}
