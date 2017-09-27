import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { SystemStats } from "../../common/system-stats/system-stats.vo";

interface SystemSummaryItem {
    system: string;
    summary: string;
    priority?: [ number, number ];
}

@Component({
    selector: "ow-system-summary",
    templateUrl: "system-summary.template.html",
    styleUrls: [ "system-summary.style.scss" ]
})
export class SystemSummary implements OnInit {

    private systemSummaryItems: Array<SystemSummaryItem> = [];
    @Output() systemSelected = new EventEmitter<string>();

    ngOnInit() { }

    onSystemSelected(system: string): void {
        this.systemSelected.emit(system);
    }

    private sortItems(systemSummaryItems: Array<SystemSummaryItem>) {
        systemSummaryItems.sort((a, b) => {
            if (a.priority[0] !== b.priority[0]) return a.priority[0] - b.priority[0];
            else return b.priority[1] - a.priority[1];
        });
    }

    summarize(systemInfo: SystemStats) {
        let systemSummaryItems: Array<SystemSummaryItem> = [];
        for (let node of systemInfo.nodes) {
            if (node.fpm[0] + node.fpm[1] + node.fpm[2] === 0)
                continue;
            let system: string = node.name;
            let summary: string;
            let priority: [ number, number ];
            if (node.fpm[0] > 0) {
                summary = "now";
                priority = [ 0, node.fpm[0] ];
            } else if (node.fpm[1] > 0) {
                summary = "in 5min";
                priority = [ 1, node.fpm[1] ];
            } else if (node.fpm[2] > 0) {
                summary = "in 15min";
                priority = [ 2, node.fpm[2] ];
            }
            systemSummaryItems.push({
                system: system,
                summary: `failures ${ summary }`,
                priority: priority
            });
        }
        this.sortItems(systemSummaryItems);
        this.systemSummaryItems = systemSummaryItems;
    }

}
