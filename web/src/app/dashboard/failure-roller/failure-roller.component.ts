import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";
import { SystemFailureDto } from "../../common/system-failure/system-failure.dto";

interface FailureRowVo {
    id: string;
    state: "idle" | "changed";
    failure: SystemFailureVo;
}

interface SystemFailureVo {
    time: number;
    system: string;
    status: string;
    count: number;
}

@Component({
    selector: "ow-failure-roller",
    templateUrl: "failure-roller.template.html",
    styleUrls: [ "failure-roller.style.scss" ],
    animations: [
        trigger("rowState", [
            state("idle", style({ opacity: 1, transform: "translateX(0)" })),
            state("changed", style({ opacity: 1, transform: "translateX(0)" })),
            transition("void => *", [
                style({ opacity: 0, transform: "translateX(-100%)" }),
                animate("0.2s ease-out")
            ]),
            transition("idle <=> changed", [
                animate(1000, keyframes([
                    style({ opacity: 1 }),
                    style({ opacity: 0.3 }),
                    style({ opacity: 1 }),
                    style({ opacity: 0.3 }),
                    style({ opacity: 1 })
                ]))
            ])
        ])
    ]
})
export class FailureRoller implements OnInit {

    @Output() systemSelected = new EventEmitter<string>();
    private failureRows: Array<FailureRowVo> = [];
    private failureLookup: Map<string, FailureRowVo> = new Map<string, FailureRowVo>();
    private maxLogRows = 20;

    ngOnInit() {
    }

    onSystemSelected(system: string) {
        this.systemSelected.emit(system);
    }

    private failureHash(failure: SystemFailureDto): string {
        let time = failure.time;
        time = time - time % 60;
        return `${ time }_${ failure.system }_${ failure.status }`;
    }

    addLogItem = (failure: SystemFailureDto) => {
        let id = this.failureHash(failure);
        if (this.failureLookup.has(id)) {
            let rowVo: FailureRowVo = this.failureLookup.get(id);
            rowVo.failure.count++;
            rowVo.state = rowVo.state === "idle" ? "changed" : "idle";
        } else {
            let vo: SystemFailureVo = {
                time: failure.time,
                system: failure.system,
                status: failure.status,
                count: 1
            };
            let newRow: FailureRowVo = {
                id: id,
                failure: vo,
                state: "idle"
            };
            this.failureLookup.set(id, newRow);
            this.failureRows.unshift(newRow);
            this.failureRows.sort((a, b) => b.failure.time - a.failure.time);
            if (this.failureRows.length > this.maxLogRows) {
                let removed = this.failureRows.pop();
                this.failureLookup.delete(removed.id);
            }
        }
    }

}
