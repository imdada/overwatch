import { Component, Output, EventEmitter } from "@angular/core";
import { Diagram } from "../diagram.component";
import * as d3Selection from "d3-selection";
import * as d3Scale from "d3-scale";
import { Pos, BoxVo, NodeVo, LayoutVo } from "./layout.vo";

@Component({
    selector: "ow-layout-editor",
    templateUrl: "../diagram.template.html",
    styleUrls: [ "../diagram.style.scss" ]
})
export class LayoutEditor extends Diagram<void> {

    @Output() private nodeRemoved: EventEmitter<string> = new EventEmitter<string>();
    @Output() private boxRemoved: EventEmitter<string> = new EventEmitter<string>();

    private boxes: d3Selection.Selection<SVGGElement, any, HTMLElement, any>;
    private nodes: d3Selection.Selection<SVGGElement, any, HTMLElement, any>;
    private boxVo: Array<BoxVo> = new Array<BoxVo>();
    private nodeVo: Array<NodeVo> = new Array<NodeVo>();
    private startPos: Pos = null;
    private redrawNode: d3Selection.Selection<SVGGElement, BoxVo, SVGElement, any> = null;
    private action: "drag" | "scale" = null;
    private color: d3Scale.ScaleOrdinal<string, string> = d3Scale.scaleOrdinal<string>().range(d3Scale.schemeCategory20);

    public addNode(name: string, boxId: string): void {
        let x = 100;
        let y = 100;

        const box: BoxVo = this.boxVo.find((b: BoxVo) => boxId === b.id);
        if (box !== undefined) {
            x = box.x + box.width / 3 + box.width / 3 * Math.random();
            y = box.y + box.height / 3 +  box.height / 3 * Math.random();
        }

        this.nodeVo.push({
            name: name,
            boxId: boxId,
            x: x,
            y: y
        });
        this.onUpdateDiagram();
    }

    public removeNode(name: string): void {
        this.nodeVo = this.nodeVo.filter((node: NodeVo) => node.name !== name);
        this.onUpdateDiagram();
    }

    public addBox(id: string, x: number, y: number, width: number, height: number): void {
        this.boxVo.push({
            id: id,
            width: width,
            height: height,
            x: x,
            y: y
        });
        this.onUpdateDiagram();
    }

    public removeBox(boxId: string): void {
        this.boxVo = this.boxVo.filter((box: BoxVo) => box.id !== boxId);
        this.onUpdateDiagram();
    }

    public save(): LayoutVo {
        let layoutVo: LayoutVo = {
            boxes: new Map<string, BoxVo>(),
            nodes: new Map<string, string>()
        };
        this.boxes.selectAll(".box")
            .each((d: BoxVo) => layoutVo.boxes.set(d.id, d));
        this.nodes.selectAll(".node")
            .each((d: NodeVo) => {
                let boxId = "";
                layoutVo.boxes.forEach((box: BoxVo, id: string) => {
                    const isInside = d.x > box.x
                        && d.x < box.x + box.width
                        && d.y > box.y
                        && d.y < box.y + box.height;
                    if (
                        d.x > box.x
                        && d.x < box.x + box.width
                        && d.y > box.y
                        && d.y < box.y + box.height
                    ) boxId = id;
                });
                layoutVo.nodes.set(d.name, boxId);
            });
        return layoutVo;
    }

    onDrawDiagram() {
        this.boxes = this.canvas.append<SVGGElement>("g")
            .attr("class", "boxes");
        this.nodes = this.canvas.append<SVGGElement>("g")
            .attr("class", "nodes");
        this.canvas
            .on("mousemove", () => {
                if (this.action === null) return;
                let vo: BoxVo = this.redrawNode.data()[0];
                if (this.action === "drag") {
                    let pos = d3Selection.mouse(this.canvas.node());
                    pos[0] -= this.startPos.x;
                    pos[1] -= this.startPos.y;
                    vo.x = pos[0] > 0 ? pos[0] : 0;
                    vo.y = pos[1] > 0 ? pos[1] : 0;
                    this.redrawNode
                        .attr("transform", `translate(${ vo.x }, ${ vo.y })`);
                } else if (this.action === "scale") {
                    let pos = d3Selection.mouse(this.redrawNode.node());
                    vo.width = pos[0] > 30 ? pos[0] : 30;
                    vo.height = pos[1] > 30 ? pos[1] : 30;
                    this.redrawNode.select("rect")
                        .attr("width", vo.width)
                        .attr("height", vo.height);
                    this.redrawNode.select("circle")
                        .attr("cx", vo.width)
                        .attr("cy", vo.height);
                    this.redrawNode.select(".btn-del")
                        .attr("transform", `translate(${ vo.width }, 0)`);
                }
            })
            .on("mouseup", () => {
                this.action = null;
                this.redrawNode = null;
            });
    }

    private initBtnDel = (d: d3Selection.Selection<SVGGElement, any, SVGElement, any>) => {
        d.append("circle")
            .attr("cx", 0).attr("cy", 0)
            .attr("r", 5)
            .attr("fill", "red")
            .attr("stroke", "none");
        d.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("fill", "white")
            .attr("font-size", 16)
            .text("-");
        d.style("cursor", "pointer");
    }

    private initBox = (root: d3Selection.Selection<SVGGElement, BoxVo, SVGElement, any>) => {
        root.append("rect")
            .attr("x", (d) => 0)
            .attr("y", (d) => 0)
            .attr("width", (d) => d.width)
            .attr("height", (d) => d.height)
            .attr("stroke", (d, i) => this.color(i.toString()))
            .attr("stroke-width", 2)
            .attr("fill", "transparent")
            .style("cursor", "move");
        root.on("mousedown", (d, i , g) => {
            this.action = "drag";
            this.redrawNode = d3Selection.select<SVGGElement, BoxVo>(g[i]);
            let pos = d3Selection.mouse(this.redrawNode.node());
            this.startPos = { x: pos[0], y: pos[1] };
        });
        let btnScale = root.append("circle")
            .attr("cx", (d) => d.width)
            .attr("cy", (d) => d.height)
            .attr("r", 5)
            .attr("stroke", "none")
            .attr("fill", (d, i) => this.color(i.toString()))
            .style("cursor", "nwse-resize");
        btnScale.on("mousedown", (d, i, g) => {
                let event: MouseEvent = d3Selection.event;
                event.stopPropagation();
                this.action = "scale";
                let node: SVGGElement = (<any>g[i]).parentElement;
                this.redrawNode = d3Selection.select<SVGGElement, BoxVo>(node);
            });
        let btnDel = root.append("g")
            .attr("class", "btn-del")
            .attr("transform", (d) => `translate(${ d.width }, 0)`)
            .call(this.initBtnDel);
        btnDel.on("click", (d) => this.boxRemoved.emit(d.id));
    }

    private initNode = (root: d3Selection.Selection<SVGGElement, NodeVo, SVGElement, any>) => {
        root.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 20)
            .attr("fill", "#0af")
            .attr("stroke", "none");
        root.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("fill", "white")
            .attr("font-size", 16)
            .text((d) => d.name);
        let btnDel = root.append("g")
            .attr("class", "btn-del")
            .attr("transform", `translate(${ 20 / Math.sqrt(2) }, ${ -20 / Math.sqrt(2) })`)
            .call(this.initBtnDel);
        btnDel.on("click", (d) => this.nodeRemoved.emit(d.name));
        root.style("cursor", "move");
        root.on("mousedown", (d, i, g) => {
            this.action = "drag";
            this.redrawNode = d3Selection.select<SVGGElement, BoxVo>(g[i]);
            let pos = d3Selection.mouse(this.redrawNode.node());
            this.startPos = { x: pos[0], y: pos[1] };
        });
    }

    onUpdateDiagram() {
        let boxes = this.boxes.selectAll<SVGGElement, BoxVo>(".box")
            .data(this.boxVo, (d: BoxVo) => d.id);
        boxes.enter().append<SVGGElement>("g")
            .attr("class", "box")
            .call(this.initBox)
            .merge(boxes)
            .attr("transform", (d) => `translate(${ d.x }, ${ d.y })`);
        boxes.exit().remove();
        let nodes = this.nodes.selectAll<SVGGElement, NodeVo>(".node")
            .data(this.nodeVo, (d: NodeVo) => d.name);
        nodes.enter().append<SVGGElement>("g")
            .attr("class", "node")
            .call(this.initNode)
            .merge(nodes)
            .attr("transform", (d: NodeVo) => `translate(${ d.x }, ${ d.y })`);
        nodes.exit().remove();
    }

    onResizeDiagram() {
        // TODO
    }

    clear() {
        if (this.boxes) this.boxes.selectAll<SVGGElement, BoxVo>(".box").remove();
        if (this.nodes) this.nodes.selectAll<SVGGElement, NodeVo>(".node").remove();
        this.boxVo = new Array<BoxVo>();
        this.nodeVo = new Array<NodeVo>();
    }

}
