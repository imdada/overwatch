import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material";
import { RequestsDataItem } from "../diagram/requests-time-chart/data.vo";
import { RequestsTimeChart } from "../diagram/requests-time-chart/chart.component";
import { SystemInfoService } from "../common/system-info/system-info.service";
import { SystemFailureService } from "../common/system-failure/system-failure.service";
import { SystemInfoVo } from "../common/system-info/system-info.vo";
import { SystemFailureDto } from "../common/system-failure/system-failure.dto";

interface ChartOptions {
    system: string;
    begin: Date;
    end: Date;
}

@Component({
    selector: "ow-history",
    templateUrl: "history.template.html",
    styleUrls: [ "history.style.scss" ]
})
export class History implements OnInit {

    private chartData: Array<RequestsDataItem> = [ ];
    private chartOpt: ChartOptions;
    private systems: Array<string> = [ ];
    private filteredSystems: Array<string> = [ ];
    private systemInputCtrl: FormControl = new FormControl();
    @ViewChild("chart") private chart: RequestsTimeChart;
    private chartState: "noData" | "loading" | "shown" = null;
    private failureLogs: Array<SystemFailureDto> = [ ];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private systemInfoService: SystemInfoService,
        private systemFailureService: SystemFailureService
    ) {
        let begin = new Date();
        begin.setHours(0);
        begin.setMinutes(0);
        begin.setSeconds(0);
        begin.setMilliseconds(0);
        let end = new Date();
        end.setHours(23);
        end.setMinutes(59);
        end.setSeconds(59);
        end.setMilliseconds(999);
        this.chartOpt = {
            system: "",
            begin: begin,
            end: end
        };
    }

    private loadSystems() {
        this.systemInfoService.getSystemList()
        .then((systems: Array<string>) => {
            this.systems = systems;
            this.filterSystems(this.systemInputCtrl.value);
        });
    }

    private filterSystems(val: string): void {
        if (val) this.filteredSystems = this.systems.filter(s => new RegExp(`^${val}`, "gi").test(s));
        else this.filteredSystems = this.systems;
    }

    ngOnInit(): void {
        this.loadSystems();
        this.systemInputCtrl.valueChanges.subscribe(name => this.filterSystems(name));
        this.route.queryParams.subscribe(params => {
            if (params["system"]) this.chartOpt.system = params["system"];
            if (params["begin"]) this.chartOpt.begin = new Date(params["begin"] * 1000);
            if (params["end"]) this.chartOpt.end = new Date(params["end"] * 1000);
            if (this.chartOpt.system.trim().length > 0) this.go();
        });
    }

    testDiagram() {
        let data: Array<RequestsDataItem> = new Array<RequestsDataItem>();
        let now: number = Math.round(new Date().getTime() / 1000);
        for (let i = 0; i < 100; i++) {
            data.push({
                time: now - i * 60,
                rpm: Math.round(Math.random() * 300) + 500,
                fpm: Math.round(Math.random() * 10)
            });
        }
        this.chartData = data;
        this.chartState = "shown";
    }

    beginDateChanged(date: MatDatepickerInputEvent<Date>): void {
        let begin = date.value;
        begin.setHours(0);
        begin.setMinutes(0);
        begin.setSeconds(0);
        begin.setMilliseconds(0);
        if (begin > this.chartOpt.end) {
            let end = new Date(begin);
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);
            end.setMilliseconds(999);
            this.chartOpt.end = end;
        }
        this.chartOpt.begin = begin;
    }

    endDateChanged(date: MatDatepickerInputEvent<Date>): void {
        let end = date.value;
        end.setHours(23);
        end.setMinutes(59);
        end.setSeconds(59);
        end.setMilliseconds(999);
        if (end < this.chartOpt.begin) {
            let begin = new Date(end);
            begin.setHours(0);
            begin.setMinutes(0);
            begin.setSeconds(0);
            begin.setMilliseconds(0);
            this.chartOpt.begin = begin;
        }
        this.chartOpt.end = end;
    }

    go(): void {
        let system: string = this.chartOpt.system;
        if (system === "") {
            window.alert("please select a system");
            return;
        }
        let begin: number = Math.round(this.chartOpt.begin.getTime() / 1000);
        let end: number = Math.round(this.chartOpt.end.getTime() / 1000);
        this.chartState = "loading";
        this.systemInfoService.getSystemInfo(system, begin, end)
        .then((systemInfo: Array<SystemInfoVo>) => {
            if (systemInfo.length === 0) {
                this.chartState = "noData";
                return;
            }
            let data: Array<RequestsDataItem> = systemInfo.map((info) => {
                return {
                    time: info.time,
                    rpm: info.rpm,
                    fpm: info.fpm
                };
            });
            this.chartData = data;
            this.chartState = "shown";
        });
        this.systemFailureService.getSystemFailure({
            system: system,
            begin: begin,
            end: end,
            count: 100
        })
        .then((systemFailures: Array<SystemFailureDto>) => {
            this.failureLogs = systemFailures;
        });
    }

}
