import { Component, OnInit } from "@angular/core";
import { Input, ViewChild, ElementRef } from "@angular/core";
import * as d3 from "d3-selection";

interface LineData {
    x1: number | string;
    x2: number | string;
    y1: number | string;
    y2: number | string;
}

type Selection = d3.Selection<d3.BaseType, any, HTMLElement, any>;

@Component({})
export abstract class Diagram<DataType> implements OnInit {

    @Input() protected data: DataType = null;
    @Input() protected drawOnInit: "true" | "false" = "true";
    @Input("width") protected widthInput: number = null;
    @Input("height") protected heightInput: number = null;
    protected width: number;
    protected height: number;
    private updateCancelled = false;
    @ViewChild("canvas") protected canvasElement: ElementRef;
    protected canvas: d3.Selection<SVGSVGElement, any, HTMLElement, any>;

    ngOnInit() {
        let el: SVGSVGElement = this.canvasElement.nativeElement;
        this.canvas = d3.select(el);
        window.onresize = () => {
            this.calcCanvasSize();
            this.onResizeDiagram();
        };
        if (this.drawOnInit !== "false") {
            this.onDrawDiagram();
            this.updateDiagram();
        }
    }

    protected calcCanvasSize(): void {
        let el: SVGElement = this.canvasElement.nativeElement;
        let boundingBox: ClientRect = el.getBoundingClientRect();
        this.width = this.widthInput || boundingBox.width;
        this.height = this.heightInput || boundingBox.height;
    }

    protected drawLine(target: Selection, x1: number, y1: number, x2: number, y2: number,
                       attr?: Map<string, string>, percentage?: boolean): Selection {
        let line = target.append("line")
            .attr("x1", percentage === true ? `${ x1 }%` : x1)
            .attr("x2", percentage === true ? `${ x2 }%` : x2)
            .attr("y1", percentage === true ? `${ y1 }%` : y1)
            .attr("y2", percentage === true ? `${ y2 }%` : y2)
            .attr("stroke-width", 1).attr("stroke", "red");
        if (attr) attr.forEach((value, key) => line.attr(key, value));
        return line;
    }

    protected drawBox(target: Selection, x1: number, y1: number, x2: number, y2: number,
                      attr?: Map<string, string>, percentage?: boolean): Selection {
        let group = target.append("g");
        this.drawLine(group, x1, y1, x2, y1, attr, percentage);
        this.drawLine(group, x2, y1, x2, y2, attr, percentage);
        this.drawLine(group, x2, y2, x1, y2, attr, percentage);
        this.drawLine(group, x1, y2, x1, y1, attr, percentage);
        return group;
    }

    public clearDiagram(): void {
        this.canvas.selectAll("*").remove();
    }

    protected onDrawDiagram(cross?: boolean): void {
        // draw a placeholder by default
        this.calcCanvasSize();
        let attr = new Map<string, string>();
        attr.set("stroke", "red");
        let border = this.drawBox(this.canvas, 0, 0, 100, 100, attr, true);
        if (cross !== false) {
            this.drawLine(border, 0, 0, 100, 100, attr, true);
            this.drawLine(border, 0, 100, 100, 0, attr, true);
        }
    }

    private updateDiagram(): void {
        if (this.data) this.onUpdateDiagram();
    }

    protected abstract onUpdateDiagram(): void;
    protected abstract onResizeDiagram(): void;

    public update(): void {
        this.onUpdateDiagram();
    }

}
