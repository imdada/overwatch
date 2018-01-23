import { Component, OnDestroy, OnChanges, SimpleChanges, Input, Output, EventEmitter } from "@angular/core";
import { Diagram } from "../diagram.component";
import * as d3Selection from "d3-selection";
import * as d3Force from "d3-force";
import * as d3Drag from "d3-drag";
import * as d3Scale from "d3-scale";
import "d3-transition";
import * as d3Ease from "d3-ease";
import * as d3Interpolate from "d3-interpolate";
import { SystemStats } from "./system-stats.vo";
import { SystemSelectedEvent } from "./system-selected.event";

type DataOverTime = [ number, number, number ];

interface NodeVo {
    index?: number;
    name: string;
    rpm: DataOverTime;
    fpm: DataOverTime;
    health: DataOverTime;
    boundingBox: BoundingBox;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number;
    fy?: number;
    tooltip?: any;
}

interface LinkVo {
    source: NodeVo;
    target: NodeVo;
    rpm: DataOverTime;
    fpm: DataOverTime;
    health: DataOverTime;
}

interface DataVo {
    nodes: Array<NodeVo>;
    links: Array<LinkVo>;
}

interface DataDiff {
    nodes: Array<NodeVo>;
    links: Array<LinkVo>;
    removed: Set<string>;
}

export class BoundingBox {

    private _r: number;
    private _b: number;
    private _forceDirection: "none" | "horizontal" | "vertical" | "both";

    constructor(
        private _x: number,
        private _y: number,
        private _w: number,
        private _h: number,
        forceDirection?: "none" | "horizontal" | "vertical" | "both"
    ) {
        this._r = _x + _w;
        this._b = _y + _h;
        if (forceDirection) this._forceDirection = forceDirection;
        else this._forceDirection = "vertical";
    }

    get x() { return this._x; }
    get y() { return this._y; }
    get w() { return this._w; }
    get h() { return this._h; }
    get r() { return this._r; }
    get b() { return this._b; }
    get forceDirection() { return this._forceDirection; }

    public outOfXBound(x: number): number {
        if (x < this._x) return x - this._x;
        if (x > this._x + this._w) return x - this._x - this._w;
        return 0;
    }

    public outOfYBound(y: number): number {
        if (y < this._y) return y - this._y;
        if (y > this._y + this._h) return y - this._y - this._h;
        return 0;
    }

    public transform(x: number, y: number, w: number, h: number) {
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
        this._r = x + w;
        this._b = y + h;
    }

    public getRandomPos(): [ number, number ] {
        let result: [ number, number ] = [
            this._x + Math.random() * this._w,
            this._y + Math.random() * this._h
        ];
        return result;
    }

    public forceX(strength?: number): d3Force.ForceX<NodeVo> {
        return d3Force.forceX<NodeVo>().x(this._x + this._w / 2)
        .strength((d: NodeVo) => {
            if (d.boundingBox === this) return strength || 0.2;
            return 0;
        });
    }

    public forceY(strength?: number): d3Force.ForceY<NodeVo> {
        return d3Force.forceY<NodeVo>().y(this._y + this._h / 2)
        .strength((d: NodeVo) => {
            if (d.boundingBox === this) return strength || 0.2;
            return 0;
        });
    }

}

interface Point {
    x: number;
    y: number;
}

export interface GraphLayout {
    boundingBoxes: Map<string, BoundingBox>;
    nodeBoxMap: Map<string, string>;
}

type Selection<E extends d3Selection.BaseType> = d3Selection.Selection<E, any, HTMLElement, any>;

@Component({
    selector: "ow-graph-sys-rpc",
    templateUrl: "../diagram.template.html",
    styleUrls: [ "../diagram.style.scss", "graph.style.scss" ]
})
export class SystemsRpcGraph extends Diagram<SystemStats> implements OnChanges, OnDestroy {

    @Input() private layout: GraphLayout;
    @Output() systemSelected = new EventEmitter<SystemSelectedEvent>();

    private color: d3Scale.ScaleLinear<string, string> = d3Scale.scaleLinear<string>()
        .domain([ 0, 0.99, 0.999, 1 ])
        .range([ "#a00", "#a00", "#fc0", "#0af" ]);

    private nodes: Selection<d3Selection.BaseType>;
    private links: Selection<d3Selection.BaseType>;
    private diagramRoot: Selection<SVGGElement>;
    private forces: d3Force.Simulation<NodeVo, LinkVo>;
    private dataVo: DataVo = null;

    private lastReactiveTimeout: number;

    private readonly nodeSizeLarge = this.nodeSize(12);
    private readonly nodeSizeMedium = this.nodeSize(9);
    private readonly nodeSizeSmall = this.nodeSize(6);
    private readonly tooltipBgRadius = (d: NodeVo) => this.nodeSizeLarge(d) + 80;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.layout) {
            this.layout = changes.layout.currentValue;
            if (changes.layout.firstChange) return;
            this.onUpdateDiagram();
        } else if (changes.data) {
            this.onUpdateDiagram();
        }
    }

    ngOnDestroy() {
        if (this.forces) {
            this.forces.stop();
            if (this.lastReactiveTimeout) window.clearTimeout(this.lastReactiveTimeout);
        }
    }

    private nodeSize(base = 8): (node: NodeVo) => number {
        return (node: NodeVo) => {
            let rpm: number = node.rpm[0];
            if (rpm === 0) return base;
            return base + Math.log10(rpm) * 4;
        };
    }

    private healthColor(idx = 0): (node) => string {
        return (node) => {
            if (node.rpm[idx] === 0) return "#666";
            else return this.color(node.health[idx]);
        };
    }

    private calcHealth(fpm: DataOverTime, rpm: DataOverTime): DataOverTime {
        let health: DataOverTime = [ 0, 0, 0 ];
        for (let idx = 0; idx < 3; idx++) {
            let f: number = fpm[idx];
            let r: number = rpm[idx];
            let h: number;
            if (r === 0 && f === 0) h = 1;
            else if (r === 0) h = 0;
            else h = (r - f) / r;
            health[idx] = h;
        }
        return health;
    }

    private generateData(systemStats: SystemStats, layout?: GraphLayout): DataVo {
        let dataVo: DataVo;
        if (this.dataVo == null) {
            dataVo = {
                nodes: new Array<NodeVo>(),
                links: new Array<LinkVo>()
            };
        } else {
            dataVo = this.dataVo;
        }

        let nodeIdxMap: Map<string, NodeVo> = new Map<string, NodeVo>();
        let removedNodes = new Set<string>();
        for (let node of systemStats.nodes) {

            let nodeVoIdx = dataVo.nodes.findIndex((nodeVo) => nodeVo.name === node.name);
            let isNew = nodeVoIdx === -1;

            if (layout) {
                if (!layout.nodeBoxMap.has(node.name)) {
                    removedNodes.add(node.name);
                    if (!isNew) dataVo.nodes.splice(nodeVoIdx, 1);
                    continue;
                }
            }

            let nodeVo;
            if (isNew) {
                nodeVo = {
                    name: node.name,
                    rpm: node.rpm,
                    fpm: node.fpm,
                    health: this.calcHealth(node.fpm, node.rpm),
                    boundingBox: null,
                    tooltip: { }
                };
            } else {
                nodeVo = dataVo.nodes[nodeVoIdx];
                nodeVo.rpm = node.rpm;
                nodeVo.fpm = node.fpm;
                nodeVo.health = this.calcHealth(node.fpm, node.rpm);
                nodeVo.boundingBox = null;
            }

            if (layout && layout.nodeBoxMap.has(node.name)) {
                let boxName = layout.nodeBoxMap.get(node.name);
                if (layout.boundingBoxes.has(boxName)) {
                    let boundingBox = layout.boundingBoxes.get(boxName);
                    nodeVo.boundingBox = boundingBox;
                    if (isNew || boundingBox.outOfXBound(nodeVo.x) || boundingBox.outOfYBound(nodeVo.y)) {
                        let pos = nodeVo.boundingBox.getRandomPos();
                        nodeVo.x = pos[0];
                        nodeVo.y = pos[1];
                    }
                }
            }

            if (isNew) dataVo.nodes.push(nodeVo);
            nodeIdxMap.set(node.name, nodeVo);
        }

        dataVo.nodes = dataVo.nodes.filter((node) => {
            return nodeIdxMap.has(node.name);
        });

        dataVo.links = [ ];
        for (let link of systemStats.links) {
            if (removedNodes.has(link.source) || removedNodes.has(link.target)) continue;
            let sourceIdx = nodeIdxMap.get(link.source);
            let targetIdx = nodeIdxMap.get(link.target);
            dataVo.links.push({
                source: sourceIdx,
                target: targetIdx,
                rpm: link.rpm,
                fpm: link.fpm,
                health: this.calcHealth(link.fpm, link.rpm)
            });
        }
        this.dataVo = dataVo;
        return dataVo;
    }

    private drawTooltip(nodes: Selection<d3Selection.BaseType>): void {
        let root = nodes.append("g").attr("class", "tooltip-wrapper");

        root.append("defs")
            .append("clipPath").attr("id", (d, i) => `tooltipClip-${i}`)
            .append("circle").attr("class", "mask").attr("cx", 0).attr("cy", 0);

        let tooltip = root.append("g")
            .attr("class", "tooltip")
            .attr("font-family", "monospace")
            .attr("transform", "scale(0)")
            .attr("visibility", "hidden")
            .attr("clip-path", (d, i) => `url(#tooltipClip-${i})`)
            .attr("opacity", 0);

        let background = tooltip.append("g").attr("class", "background");
        background.append("circle")
            .attr("cx", 0).attr("cy", 0)
            .attr("fill", "rgba(40, 44, 52, 0.9)")
            .attr("stroke-width", 2);
        background.append("line").attr("class", "line-nw-se")
            .attr("stroke", "rgb(54, 58, 66)")
            .attr("stroke-width", 1);
        background.append("line").attr("class", "line-ne-sw")
            .attr("stroke", "rgb(54, 58, 66)")
            .attr("stroke-width", 1);

        tooltip.append("circle")
            .attr("class", "ripple")
            .attr("cx", 0).attr("cy", 0)
            .attr("r", 0).attr("opacity", 0)
            .attr("stroke-width", 0)
            .attr("fill", "black");

        let pageStats = tooltip.append("g")
            .attr("class", "page-stats")
            .attr("transfrom", "translate(0, 0)");
        let stats1min = pageStats.append("g").attr("class", "stats-1min");
        stats1min.append("text")
            .attr("class", "rpm")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 18)
            .attr("fill", "#39c461")
            .attr("x", 0).attr("y", -5);
        stats1min.append("text")
            .attr("class", "fpm")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "hanging")
            .attr("font-size", 18)
            .attr("fill", "#df534f")
            .attr("x", 0).attr("y", 0);
        stats1min.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 8)
            .attr("fill", "#888")
            .attr("x", 0).attr("y", -25)
            .text("1min");

        let stats5min = pageStats.append("g").attr("class", "stats-5min");
        stats5min.append("text")
            .attr("class", "rpm")
            .attr("text-anchor", "end")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 14)
            .attr("fill", "#39c461")
            .attr("x", 0).attr("y", -5);
        stats5min.append("text")
            .attr("class", "fpm")
            .attr("text-anchor", "end")
            .attr("alignment-baseline", "hanging")
            .attr("font-size", 14)
            .attr("fill", "#df534f")
            .attr("x", 0).attr("y", 5);
        stats5min.append("text")
            .attr("text-anchor", "end")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 8)
            .attr("fill", "#888")
            .attr("x", 0).attr("y", -25)
            .text("5min Avg.");

        let stats15min = pageStats.append("g").attr("class", "stats-15min");
        stats15min.append("text")
            .attr("class", "rpm")
            .attr("text-anchor", "start")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 14)
            .attr("fill", "#39c461")
            .attr("x", 0).attr("y", -5);
        stats15min.append("text")
            .attr("class", "fpm")
            .attr("text-anchor", "start")
            .attr("alignment-baseline", "hanging")
            .attr("font-size", 14)
            .attr("fill", "#df534f")
            .attr("x", 0).attr("y", 5);
        stats15min.append("text")
            .attr("text-anchor", "start")
            .attr("alignment-baseline", "baseline")
            .attr("font-size", 8)
            .attr("fill", "#888")
            .attr("x", 0).attr("y", -25)
            .text("15min Avg.");

        pageStats.append("text")
            .attr("class", "tip")
            .attr("alignment-baseline", "hang")
            .attr("fill", "#888")
            .attr("font-size", 8)
            .text("* double click for stats");

        let btnMore = pageStats.append("g").attr("class", "btn-more");
        btnMore.append("rect")
            .attr("x", -20).attr("y", -5)
            .attr("width", 40).attr("height", 10)
            .attr("fill", "transparent");
        btnMore.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("font-size", 10)
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 0)
            .text("more...");

        let pageHistory = tooltip.append("g").attr("class", "page-history");

        let statsNow = pageHistory.append("g").attr("class", "stats-now");
        statsNow.append("rect")
            .attr("fill", "transparent")
            .attr("x", -30).attr("y", -30)
            .attr("width", 60).attr("height", 60);
        statsNow.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("font-size", 18)
            .attr("font-family", "FontAwesome")
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 0)
            .text("\uf201");
        statsNow.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "hang")
            .attr("font-size", 8)
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 20)
            .text("Quick Stats");

        let statsHour = pageHistory.append("g").attr("class", "stats-hour");
        statsHour.append("rect")
            .attr("fill", "transparent")
            .attr("x", -30).attr("y", -30)
            .attr("width", 60).attr("height", 60);
        statsHour.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("font-size", 18)
            .attr("font-family", "FontAwesome")
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 0)
            .text("\uf252");
        statsHour.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "hang")
            .attr("font-size", 8)
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 20)
            .text("Hour Stats");

        let statsDay = pageHistory.append("g").attr("class", "stats-day");
        statsDay.append("rect")
            .attr("fill", "transparent")
            .attr("x", -30).attr("y", -30)
            .attr("width", 60).attr("height", 60);
        statsDay.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("font-size", 18)
            .attr("font-family", "FontAwesome")
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 0)
            .text("\uf017");
        statsDay.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "hang")
            .attr("font-size", 8)
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 20)
            .text("Day Stats");

        let btnBack = pageHistory.append("g").attr("class", "btn-back");
        btnBack.append("rect")
            .attr("x", -20).attr("y", -5)
            .attr("width", 40).attr("height", 10)
            .attr("fill", "transparent");
        btnBack.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "central")
            .attr("font-size", 10)
            .attr("fill", "#aaa")
            .attr("x", 0).attr("y", 0)
            .text("back");

        let togglePage = (d, i, g) => {
            // FIXME: how to select .tooltip elegantly
            let el: SVGGElement = (<any>g[i]).parentElement.parentElement;
            let target = d3Selection.select(el);
            let pageHistoryTranslate: string;
            let pageStatsTranslate: string;
            if (d.tooltip.currentPage === "stats") {
                pageHistoryTranslate = `translate(0, 0)`;
                pageStatsTranslate = `translate(-${ this.tooltipBgRadius(d) * 2 }, 0)`;
                d.tooltip.currentPage = "history";
            } else {
                pageHistoryTranslate = `translate(${ this.tooltipBgRadius(d) * 2 }, 0)`;
                pageStatsTranslate = `translate(0, 0)`;
                d.tooltip.currentPage = "stats";
            }
            target.select(".page-history")
                .interrupt().transition()
                .duration(200).ease(d3Ease.easeSinOut)
                .attr("transform", pageHistoryTranslate);
            target.select(".page-stats")
                .interrupt().transition()
                .duration(200).ease(d3Ease.easeSinOut)
                .attr("transform", pageStatsTranslate);
        };

        let btnHightlight = (d, i, g) => {
            d3Selection.select(g[i]).selectAll("text")
                .attr("fill", "white");
        };

        let btnCancelHightlight = (d, i, g) => {
            d3Selection.select(g[i]).selectAll("text")
                .attr("fill", "#aaa");
        };

        btnMore.on("click", togglePage)
            .on("mouseenter", btnHightlight)
            .on("mouseleave", btnCancelHightlight);
        btnBack.on("click", togglePage)
            .on("mouseenter", btnHightlight)
            .on("mouseleave", btnCancelHightlight);
        statsNow.on("click", (d) => this.systemSelected.emit({ system: d.name, eventType: "stats" }))
            .on("mouseenter", btnHightlight)
            .on("mouseleave", btnCancelHightlight);
        statsHour.on("click", (d) => this.systemSelected.emit({ system: d.name, eventType: "stats_1h" }))
            .on("mouseenter", btnHightlight)
            .on("mouseleave", btnCancelHightlight);
        statsDay.on("click", (d) => this.systemSelected.emit({ system: d.name, eventType: "stats_1d" }))
            .on("mouseenter", btnHightlight)
            .on("mouseleave", btnCancelHightlight);
    }

    private updateTooltip(nodes: Selection<d3Selection.BaseType>): void {
        let pointCoor = (s) => (d) => s * ((this.tooltipBgRadius(d)) - 3) / Math.sqrt(2);

        let root = nodes.selectAll(".tooltip-wrapper");
        root.selectAll<SVGElement, NodeVo>("defs .mask").attr("r", (d) => this.tooltipBgRadius(d));

        let tooltip = root.selectAll<SVGGElement, NodeVo>(".tooltip");

        let background = tooltip.selectAll(".background");
        background.selectAll<SVGCircleElement, NodeVo>("circle")
            .attr("r", (d) => this.tooltipBgRadius(d) - 2)
            .attr("stroke", this.healthColor(0));
        background.selectAll(".line-nw-se")
            .attr("x1", pointCoor(-1)).attr("y1", pointCoor(-1))
            .attr("x2", pointCoor(1)).attr("y2", pointCoor(1));
        background.selectAll(".line-ne-sw")
            .attr("x1", pointCoor(-1)).attr("y1", pointCoor(1))
            .attr("x2", pointCoor(1)).attr("y2", pointCoor(-1));

        let pageStats = tooltip.selectAll<SVGGElement, NodeVo>(".page-stats");

        let stats1min = pageStats.select(".stats-1min")
            .attr("transform", (d) => `translate(0, ${ -this.nodeSizeLarge(d) - (this.tooltipBgRadius(d) - this.nodeSizeLarge(d)) / 3 })`);
        stats1min.select("text.rpm")
            .text((d) => `${ d.rpm[0] }`);
        stats1min.select("text.fpm")
            .text((d) => `${ d.fpm[0] }`);

        let stats5min = pageStats.select(".stats-5min")
            .attr("transform", (d) => `translate(${ -this.nodeSizeLarge(d) - 10 }, 0)`);
        stats5min.select("text.rpm")
            .text((d) => `${ Math.round(d.rpm[1]) }`);
        stats5min.select("text.fpm")
            .text((d) => `${ Math.round(d.fpm[1]) }`);

        let stats15min = pageStats.select(".stats-15min")
            .attr("transform", (d) => `translate(${ this.nodeSizeLarge(d) + 10 }, 0)`);
        stats15min.select("text.rpm")
            .text((d) => `${ Math.round(d.rpm[2]) }`);
        stats15min.select("text.fpm")
            .text((d) => `${ Math.round(d.fpm[2]) }`);

        pageStats.select("text.tip")
            .attr("x", 0).attr("y", (d) => this.nodeSizeLarge(d) + (this.tooltipBgRadius(d) - this.nodeSizeLarge(d)) / 3 * 2);

        let btnMore = pageStats.select(".btn-more")
            .attr("transform", (d) => `translate(0, ${ this.nodeSizeLarge(d) + 20 })`);

        let pageHistory = tooltip.select(".page-history")
            .attr("transform", (d) => `translate(${ this.tooltipBgRadius(d) * 2 }, 0)`);

        let statsNow = pageHistory.select(".stats-now")
            .attr("transform", (d) => `translate(0, ${ -this.nodeSizeLarge(d) - (this.tooltipBgRadius(d) - this.nodeSizeLarge(d)) / 2 })`);
        let statsHour = pageHistory.select(".stats-hour")
            .attr("transform", (d) => `translate(${ -this.nodeSizeLarge(d) - (this.tooltipBgRadius(d) - this.nodeSizeLarge(d)) / 2 }, 0)`);
        let statsDay = pageHistory.select(".stats-day")
            .attr("transform", (d) => `translate(${ this.nodeSizeLarge(d) + (this.tooltipBgRadius(d) - this.nodeSizeLarge(d)) / 2 }, 0)`);

        let btnBack = pageHistory.select(".btn-back")
            .attr("transform", (d) => `translate(0, ${ this.nodeSizeLarge(d) + 20 })`);
    }

    private showTooltip(target: Selection<d3Selection.BaseType>): void {
        let d = target.data()[0];
        target.select(".node-name").interrupt().transition()
            .duration(200).ease(d3Ease.easeSinOut)
            .attr("dy", this.nodeSizeLarge(d) + (this.tooltipBgRadius(d) - this.nodeSizeLarge(d)) / 3 * 2 - 15);
        d.tooltip.currentPage = "stats";
        target.select(".page-stats").attr("transform", "translate(0, 0)");
        target.select(".page-history").attr("transform", `translate(${ this.tooltipBgRadius(d) * 2 }, 0)`);
        target.select(".tooltip").attr("visibility", "visible")
            .interrupt().transition()
            .duration(200).ease(d3Ease.easeSinOut)
            .attr("opacity", 1)
            .attr("transform", "scale(1)");
        let ring = target.select(".ripple");
        target.select(".ripple")
            .attr("r", 0)
            .attr("opacity", 0.5)
            .attr("fill", this.healthColor(0))
            .interrupt().transition()
            .duration(400).ease(d3Ease.easeSinOut)
            .attr("r", this.tooltipBgRadius(d))
            .attr("opacity", 0)
            .on("end", () => ring.attr("r", 0));
    }

    private hideTooltip(target: Selection<d3Selection.BaseType>): void {
        target.select(".node-name").interrupt().transition()
            .duration(200).ease(d3Ease.easeSinOut)
            .attr("dy", 0);
        target.select(".tooltip").interrupt().transition()
            .duration(200).ease(d3Ease.easeSinOut)
            .attr("opacity", 0)
            .attr("transform", "scale(0)")
            .on("end", (d, i, g) => d3Selection.select(g[i]).attr("visibility", "hidden"));
    }

    private drawNodeDetail(nodes: Selection<d3Selection.BaseType>): void {
        if (nodes.size() === 0) return;
        nodes.attr("text-anchor", "middle")
            .attr("font-size", "15")
            .style("cursor", "pointer");
        this.drawTooltip(nodes);
        let rings = nodes.append("g").attr("class", "rings");
        // outter ring
        rings.append("circle").attr("class", "outter");
        // middle ring
        rings.append("circle").attr("class", "middle");
        // inner ring
        rings.append("circle").attr("class", "inner");
        // add text
        rings.append("text")
            .attr("class", "node-name")
            .attr("alignment-baseline", "central")
            .attr("fill", "white")
            .attr("x", 0).attr("y", 0).attr("dy", 0);

        // add open event
        rings.on("dblclick", (d) => this.systemSelected.emit({ system: d.name, eventType: "stats" }));

        // tooltip events
        nodes.on("mouseenter", (d, i, g) => {
            d.fx = d.x;
            d.fy = d.y;
            let node = d3Selection.select(g[i]);
            node.raise();
            this.showTooltip(node);
        })
        .on("mouseleave", (d, i, g) => {
            d.fx = null;
            d.fy = null;
            this.hideTooltip(d3Selection.select(g[i]));
        });

    }

    private updateNodeDetail(nodes: Selection<d3Selection.BaseType>): void {
        let rings = nodes.selectAll<SVGGElement, NodeVo>(".rings");
        this.updateTooltip(nodes);
        // outter ring
        rings.select(".outter")
            .attr("r", this.nodeSizeLarge)
            .attr("fill", this.healthColor(2));
        // middle ring
        rings.select(".middle")
            .attr("r", this.nodeSizeMedium)
            .attr("fill", this.healthColor(1));
        // inner ring
        rings.select(".inner")
            .attr("r", this.nodeSizeSmall)
            .attr("fill", this.healthColor(0));
        // text
        rings.select(".node-name")
            .text((d) => d.name);
    }

    private drawLinkDetail(links: Selection<d3Selection.BaseType>): void {
        links.attr("stroke", this.healthColor(0))
            .attr("stroke-width", 2)
            .attr("stroke-linecap", "round")
            .attr("opacity", 0.8)
            .style("animation", "lineFlow 40s linear infinite");
    }

    private updateLinkDetail(links: Selection<d3Selection.BaseType>): void {
        links.attr("stroke-dasharray", (d) => {
            let rpm: number = d.rpm[0];
            if (rpm > 10000) rpm = 10000;
            else if (rpm <= 0) rpm = 1;
            let result: number = 22 - Math.log10(rpm) * 5;
            return `2, ${ result }`;
        });
    }

    onDrawDiagram() {
        this.calcCanvasSize();
        this.diagramRoot = this.canvas.append<SVGGElement>("g");
        this.links = this.diagramRoot.append("g").attr("class", "links");
        this.nodes = this.diagramRoot.append("g").attr("class", "nodes");

        let simulation = d3Force.forceSimulation<NodeVo, LinkVo>();
        let tick = () => {
            this.nodes.selectAll<SVGGElement, NodeVo>(".node")
            .attr("transform", (d) => {
                let boundingBox = d.boundingBox;
                if (boundingBox) {
                    let outOfXBound = boundingBox.outOfXBound(d.x);
                    if (outOfXBound !== 0) {
                        if (outOfXBound < 0) d.x = boundingBox.x;
                        else d.x = boundingBox.r;
                    }
                    let outOfYBound = boundingBox.outOfYBound(d.y);
                    if (outOfYBound !== 0) {
                        if (outOfYBound < 0) d.y = boundingBox.y;
                        else d.y = boundingBox.b;
                    }
                }
                return `translate(${ d.x }, ${ d.y })`;
            });
            this.links.selectAll<SVGLineElement, LinkVo>(".link")
                .attr("x1", (d) => d.source.x)
                .attr("y1", (d) => d.source.y)
                .attr("x2", (d) => d.target.x)
                .attr("y2", (d) => d.target.y);
        };

        let links = d3Force.forceLink<NodeVo, LinkVo>().strength(0.01);
        let charge = d3Force.forceManyBody<NodeVo>().strength(-300).distanceMax(1000);
        let x = d3Force.forceX().x(this.width / 2).strength(0.1);
        let y = d3Force.forceY().y(this.height / 2).strength(0.1);

        if (this.layout) {
            this.layout.boundingBoxes.forEach((boundingBox, name) => {
                if (boundingBox.forceDirection === "horizontal" || boundingBox.forceDirection === "both")
                    simulation.force(`${ name }_x`, boundingBox.forceX());
                if (boundingBox.forceDirection === "vertical" || boundingBox.forceDirection === "both")
                    simulation.force(`${ name }_y`, boundingBox.forceY());
            });
        }

        simulation
            .force("links", links)
            .force("charge", charge)
            .force("x", x)
            .force("y", y)
            .on("tick", tick);
        this.forces = simulation;
    }

    onUpdateDiagram() {
        if (!this.links || !this.nodes) return;

        const data = this.generateData(this.data, this.layout);

        const links = this.links.selectAll(".link").data(data.links, (d: LinkVo) => `${d.source.name}-${d.target.name}`);
        links.exit().remove();
        links.enter().append("line")
            .attr("class", "link")
            .call((l) => this.drawLinkDetail(l));
        this.links.selectAll(".link").call((l) => this.updateLinkDetail(l));

        const dragEvents: (Selection) => void = d3Drag.drag()
            .on("start", (target: NodeVo) => {
                this.nodes.selectAll(".node").data().forEach((d: NodeVo) => {
                    if (target.name !== d.name) {
                        d.fx = null;
                        d.fy = null;
                    }
                });
                if (!d3Selection.event.active) this.forces.alphaTarget(0.3).restart();
            })
            .on("drag", (d: NodeVo) => {
                this.forces.restart();
                d.fx = d3Selection.event.x;
                d.fy = d3Selection.event.y;
            })
            .on("end", () => {
                if (!d3Selection.event.active) this.forces.alphaTarget(0).restart();
            });
        const nodes = this.nodes.selectAll(".node").data(data.nodes, (d: NodeVo) => d.name);
        nodes.exit().remove();
        nodes.enter().append("g")
            .attr("class", "node")
            .call((n) => this.drawNodeDetail(n))
            .call(dragEvents);
        this.nodes.selectAll(".node").call((n) => this.updateNodeDetail(n));

        this.forces.nodes(data.nodes);
        this.forces.force<d3Force.ForceLink<NodeVo, LinkVo>>("links").links(data.links);
        this.reactivate();
    }

    onResizeDiagram() {
        if (this.forces) {
            this.forces.force<d3Force.ForceX<NodeVo>>("x").x(this.width / 2);
            this.forces.force<d3Force.ForceY<NodeVo>>("y").y(this.height / 2);
            this.reactivate();
        }
    }

    reactivate() {
        if (!this.forces) return;
        this.forces.alphaTarget(0.3);
        this.forces.restart();
        if (this.lastReactiveTimeout) window.clearTimeout(this.lastReactiveTimeout);
        this.lastReactiveTimeout = window.setTimeout(() => {
            if (!this.forces) return;
            this.forces.alphaTarget(0);
            this.lastReactiveTimeout = undefined;
        }, 5000);
    }

}
