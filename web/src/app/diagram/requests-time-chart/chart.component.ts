import { Component, SimpleChanges, SimpleChange, OnChanges } from "@angular/core";
import { Diagram } from "../diagram.component";
import { RequestsDataItem } from "./data.vo";
import * as d3Selection from "d3-selection";
import * as d3Scale from "d3-scale";
import * as d3Axis from "d3-axis";
import * as d3Color from "d3-color";
import * as d3Ease from "d3-ease";
import * as d3Time from "d3-time";
import * as d3Shape from "d3-shape";
import "d3-transition";
import * as moment from "moment";

type Selection<T extends d3Selection.BaseType> = d3Selection.Selection<T, any, HTMLElement, any>;

interface PlotScales {
    time: d3Scale.ScaleTime<number, number>;
    begin: number;
    end: number;
    rpm: d3Scale.ScaleLinear<number, number>;
    maxRpm: number;
    fpm: d3Scale.ScaleLinear<number, number>;
    maxFpm: number;
}

class PlotArea {
    top: number;
    right: number;
    bottom: number;
    left: number;
    private _canvas: Selection<SVGElement>;
    private _width: number;
    private _height: number;
    private _area: Selection<SVGGElement>;

    constructor(
        canvas: Selection<SVGElement>,
        top: number, right: number, bottom: number, left: number
    ) {
        this._canvas = canvas;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this._width = this.right - this.left;
        this._height = this.bottom - this.top;
        this._area = canvas.append<SVGGElement>("g").attr("transform", `translate(${ left }, ${ top })`);
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get area(): Selection<SVGGElement> {
        return this._area;
    }

}

@Component({
    selector: "ow-chart-rq-t",
    templateUrl: "../diagram.template.html",
    styleUrls: [ "../diagram.style.scss" ]
})
export class RequestsTimeChart extends Diagram<Array<RequestsDataItem>> implements OnChanges {

    private readonly defaultRpmPlotColor: string = "#39c461";
    private readonly defaultFpmPlotColor: string = "#df534f";
    private timeSortedData: Array<RequestsDataItem> = [ ];
    private highlightedIdx = -1;
    private redrawDelay = -1;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.data && !changes.data.isFirstChange) {
            this.data = changes.data.currentValue;
            this.update();
        }
    }

    // for tests
    createDataStub(len?: number) {
        if (len === undefined) len = 10;
        let data: Array<RequestsDataItem> = [ ];
        for (let i = 0; i < len; i++) {
            data.push({
                time: 1491004800 + 60 * i,
                rpm: Math.round(Math.random() * 1000),
                fpm: Math.round(Math.random() * 100)
            });
        }
        this.data = data;
    }

    onDrawDiagram() {
        this.calcCanvasSize();
        this.clearDiagram();
        // this.createDataStub(500 + Math.round(Math.random() * 500));
        if (!this.data || this.data.length === 0) return;

        let margin = {
            left: 25,
            right: 25,
            top: 20,
            bottom: 20
        };

        let legendHeight = 30;
        let legendArea: PlotArea = new PlotArea(
            this.canvas,
            margin.top,
            this.width - margin.right,
            margin.top + legendHeight,
            margin.left
        );

        let plotArea: PlotArea = new PlotArea(
            this.canvas,
            margin.top + legendArea.height,
            this.width - margin.right,
            this.height - margin.bottom,
            margin.left
        );

        let timeSortedData: Array<RequestsDataItem> = [];
        this.data.forEach((item) => timeSortedData.push(item));
        timeSortedData.sort((a, b) => a.time - b.time);
        this.timeSortedData = timeSortedData;

        let begin = timeSortedData[0].time;
        let end = timeSortedData[timeSortedData.length - 1].time;

        let time = d3Scale.scaleTime()
            .domain([ new Date(begin * 1000), new Date(end * 1000) ])
            .range([ 0, plotArea.width ]);

        let sortedData: Array<RequestsDataItem> = [ ];
        this.data.forEach((item) => sortedData.push(item));
        sortedData.sort((a, b) => a.rpm - b.rpm);
        let maxRpm = sortedData[sortedData.length - 1].rpm;
        maxRpm = this.roundUp(maxRpm * 1.1);

        let rpm = d3Scale.scaleLinear()
            .domain([ 0, maxRpm ])
            .range([ plotArea.height, 0 ]);

        sortedData.sort((a, b) => a.fpm - b.fpm);
        let maxFpm = sortedData[sortedData.length - 1].fpm;
        maxFpm = this.roundUp(maxFpm * 1.1);

        let fpm = d3Scale.scaleLinear()
            .domain([ 0, maxFpm ])
            .range([ plotArea.height, 0 ]);

        let scales: PlotScales = {
            time: time,
            begin: begin,
            end: end,
            rpm: rpm,
            maxRpm: maxRpm,
            fpm: fpm,
            maxFpm: maxFpm
        };

        this.drawLegend(legendArea);
        this.plot(plotArea, scales);
        this.drawAxis(plotArea, scales);
        this.initTooltip(plotArea, scales);
    }

    private roundUp(num: number): number {
        if (num < 10) return 10;
        let order = Math.pow(10, Math.round(Math.log10(num)));
        if (order >= 100) order /= 10;
        let result = Math.ceil(num / order) * order;
        return result;
    }

    private interpolate(num: number, count: number): Array<number> {
        if (count === 0) return [ 0 ];
        if (count === 1) return [ 0, num ];
        let result = [ 0 ];
        let i = 1;
        while (i <= count) {
            result.push(num * i / count);
            i++;
        }
        return result;
    }

    drawLegend(legendArea: PlotArea, opt?: any) {
        let rpmPlotColor = d3Color.color(opt && opt.rpmPlotColor || this.defaultRpmPlotColor);
        let fpmPlotColor = d3Color.color(opt && opt.fpmPlotColor || this.defaultFpmPlotColor);
        let legend = legendArea.area;
        let rpmLegend = legend.append("g")
            .attr("font-size", 15)
            .attr("font-family", "monospace")
            .attr("transform", `translate(${ legendArea.right - 200 }, 0)`);
        let legendShapeSize = 6;
        rpmLegend.append("circle")
            .attr("cx", legendShapeSize / 2)
            .attr("cy", legendShapeSize / 2)
            .attr("r", legendShapeSize / 2)
            .attr("fill", rpmPlotColor.toString());
        rpmLegend.append("text")
            .attr("x", legendShapeSize).attr("y", 0)
            .attr("dx", ".5em").attr("dy", legendShapeSize)
            .text("rpm")
            .attr("fill", "#aaa");

        let fpmLegend = legend.append("g")
            .attr("font-size", 15)
            .attr("font-family", "monospace")
            .attr("transform", `translate(${ legendArea.right - 100 }, 0)`);
        fpmLegend.append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", legendShapeSize)
            .attr("height", legendShapeSize)
            .attr("fill", fpmPlotColor.toString());
        fpmLegend.append("text")
            .attr("x", legendShapeSize).attr("y", 0)
            .attr("dx", ".5em").attr("dy", legendShapeSize)
            .text("fpm")
            .attr("fill", "#aaa");

    }

    plot(plotArea: PlotArea, scales: PlotScales, opt?: any) {

        let rpmPlotColor = d3Color.color(opt && opt.rpmPlotColor || this.defaultRpmPlotColor);
        let fpmPlotColor = d3Color.color(opt && opt.fpmPlotColor || this.defaultFpmPlotColor);
        let time = (d) => scales.time(new Date(d.time * 1000));
        let rpm = (d) => scales.rpm(d.rpm);
        let fpm = (d) => scales.fpm(d.fpm);

        let clip = plotArea.area.append("defs")
            .append("clipPath").attr("id", "plotClip")
            .append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", plotArea.width).attr("height", plotArea.height);

        // draw fpm bars
        let barWidth = plotArea.width / (this.timeSortedData.length - 1);
        let fpmPlot = plotArea.area.append("g")
            .attr("class", "fpm-plot")
            .attr("clip-path", "url(#plotClip)");
        fpmPlot.selectAll("rect")
            .data(this.timeSortedData).enter().append("rect")
            .attr("x", (d) => time(d) - barWidth).attr("y", plotArea.height)
            .attr("width", barWidth)
            .attr("height", 0)
            .attr("stroke", fpmPlotColor.brighter(0.2).toString())
            .attr("stroke-width", 1)
            .attr("fill", fpmPlotColor.toString())
            .transition()
            .duration(500).ease(d3Ease.easeCircleOut)
            .attr("height", (d) => Math.max(1, plotArea.height - fpm(d)))
            .attr("y", fpm);

        let rpmPlot = plotArea.area.append("g")
        .attr("class", "rpm-plot");
        rpmPlot.append("defs").html(`
        <linearGradient id="rpmGrad" gradientTransform="rotate(90)">
            <stop offset="20%" stop-color="${ rpmPlotColor.darker().toString() }" stop-opacity="0.3"/>
            <stop offset="80%" stop-color="${ rpmPlotColor.darker().toString() }" stop-opacity="0"/>
        </linearGradient>
        `);

        // draw rpm areas
        let areaColor = rpmPlotColor.darker();
        areaColor.opacity = 0.2;
        let points: Array<[number, number]> = [];
        points.push([ 0, plotArea.height ]);
        this.timeSortedData.forEach((item) => points.push([ time(item), rpm(item) ]));
        points.push([ plotArea.width, plotArea.height ]);
        rpmPlot.append("path")
            .attr("class", "rpm-area")
            .attr("d", d3Shape.line().x(p => p[0]).y(p => p[1])(points))
            .attr("fill", "url(#rpmGrad)");
        // draw rpm lines
        let lineStrokeWidth = Math.max(1, Math.min(plotArea.width / this.timeSortedData.length / 2 * 0.4, 4));
        let line = d3Shape.line<RequestsDataItem>().x(time).y(rpm);
        rpmPlot.append("path")
            .attr("class", "rpm-line")
            .attr("d", line(this.timeSortedData))
            .attr("stroke", rpmPlotColor.darker().toString())
            .attr("stroke-width", lineStrokeWidth)
            .attr("fill", "none");
        // draw rpm nodes
        let nodeRadius = Math.min(plotArea.width / this.timeSortedData.length / 2 * 0.4, 4);
        if (nodeRadius >= 1) {
            rpmPlot.selectAll("circle")
            .data(this.timeSortedData).enter()
            .append("circle")
            .attr("class", "rpm-node")
            .attr("cx", time).attr("cy", rpm)
            .attr("r", nodeRadius)
            .attr("r0", nodeRadius) // for easy scaling
            .attr("fill", rpmPlotColor.toString());
        }
    }

    drawAxis(plotArea: PlotArea, scales: PlotScales) {

        let timeAxis = d3Axis.axisBottom(scales.time).tickSize(0);
        let timeDiff = scales.end - scales.begin;
        if (timeDiff <= 3600) {
            if (timeDiff <= 600) timeAxis.ticks(d3Time.timeMinute.every(1));
            else timeAxis.ticks(d3Time.timeMinute.every(10));
            timeAxis.tickFormat((d: Date) => {
                return moment(d).format("HH:mm");
            });
        } else if (timeDiff <= 24 * 3600) {
            if (timeDiff <= 12 * 3600) timeAxis.ticks(d3Time.timeHour.every(1));
            else timeAxis.ticks(d3Time.timeHour.every(2));
            timeAxis.tickFormat((d: Date) => {
                return moment(d).format("HH:mm");
            });
        } else {
            timeAxis.ticks(d3Time.timeDay.every(1))
            .tickFormat((d: Date) => {
                return moment(d).format("MM-DD");
            });
        }

        let maxRpm = scales.maxRpm;
        let rpmAxis = d3Axis.axisRight(scales.rpm)
            .tickValues(this.interpolate(maxRpm, 5))
            .tickSizeInner(plotArea.width)
            .tickSizeOuter(0);

        let maxFpm = scales.maxFpm;
        let fpmAxis = d3Axis.axisLeft(scales.fpm)
            .tickValues(this.interpolate(maxFpm, 5))
            .tickSize(0);

        let axisFontColor = "#aaa";
        let axisFont = "monospace";
        let axisTickLineColor = "rgba(32, 32, 32, 0.1)";

        let axisGroup = plotArea.area.append("g").attr("class", "axis");

        axisGroup.append("g").attr("class", "axis-time")
        .attr("transform", `translate(0, ${ plotArea.height })`)
        .call((g) => {
            g.call(timeAxis);
            g.select(".domain").remove();
            g.attr("font-family", axisFont);
            g.selectAll(".tick text")
            .attr("font", axisFont)
            .attr("fill", axisFontColor)
            .attr("dy", "1em");
        });

        axisGroup.append("g").attr("class", "axis-rpm")
        .call((g) => {
            g.call(rpmAxis);
            g.select(".domain").remove();
            g.select(".tick:first-of-type text").remove();
            g.attr("text-anchor", "start")
            .attr("font-family", axisFont);
            g.selectAll(".tick text")
            .attr("fill", axisFontColor)
            .attr("x", 0)
            .attr("dy", -3);
            g.selectAll(".tick line")
            .attr("stroke", axisTickLineColor);
        });

        axisGroup.append("g").attr("class", "axis-fpm")
        .call((g) => {
            g.call(fpmAxis);
            g.select(".domain").remove();
            g.select(".tick:first-of-type text").remove();
            g.attr("text-anchor", "end")
            .attr("font-family", axisFont);
            g.selectAll(".tick text")
            .attr("fill", axisFontColor)
            .attr("dx", plotArea.width)
            .attr("dy", -3);
            g.selectAll(".tick line")
            .attr("stroke", axisTickLineColor);
        });

    }

    private highlight(fpmPlot: Selection<SVGGElement>, rpmPlot: Selection<SVGGElement>, idx: number, opt?: any): void {
        if (idx === this.highlightedIdx) return;

        let rpmPlotColor = opt && opt.rpmPlotColor || this.defaultRpmPlotColor;
        let fpmPlotColor = opt && opt.fpmPlotColor || this.defaultFpmPlotColor;

        if (this.highlightedIdx !== -1) {
            this.clearHighlights(fpmPlot, rpmPlot);
        }
        this.highlightedIdx = idx;
        let bar = fpmPlot.select(`rect:nth-child(${ idx + 1 })`);
        let color = d3Color.color(fpmPlotColor).brighter(0.6).toString();
        bar.interrupt("highlight");
        bar.transition("highlight")
            .duration(200).ease(d3Ease.easeLinear)
            .attr("fill", color);
        let circle = rpmPlot.select(`.rpm-node:nth-of-type(${ idx + 1 })`);
        if (circle.size() > 0) {
            color = d3Color.color(rpmPlotColor).brighter(0.6).toString();
            circle.interrupt("highlight");
            circle.transition("highlight")
                .duration(200).ease(d3Ease.easeLinear)
                .attr("r", parseFloat(circle.attr("r0")) * 1.5)
                .attr("fill", color);
        }
    }

    private clearHighlights(fpmPlot: Selection<SVGGElement>, rpmPlot: Selection<SVGGElement>, opt?: any): void {

        let rpmPlotColor = opt && opt.rpmPlotColor || this.defaultRpmPlotColor;
        let fpmPlotColor = opt && opt.fpmPlotColor || this.defaultFpmPlotColor;

        if (this.highlightedIdx === -1) return;
        let idx = this.highlightedIdx;
        this.highlightedIdx = -1;
        let bar = fpmPlot.select(`rect:nth-child(${ idx + 1 })`);
        let color = d3Color.color(fpmPlotColor).toString();
        bar.interrupt("highlight");
        bar.transition("highlight")
            .duration(200).ease(d3Ease.easeLinear)
            .attr("fill", color);
        let circle = rpmPlot.select(`.rpm-node:nth-of-type(${ idx + 1 })`);
        if (circle.size() > 0) {
            color = d3Color.color(rpmPlotColor).toString();
            circle.interrupt("highlight");
            circle.transition("highlight")
            .duration(200).ease(d3Ease.easeLinear)
            .attr("r", parseFloat(circle.attr("r0")))
            .attr("fill", color);
        }
    }

    private shortenNumber(num: number): string {
        if (num < 10000) return num.toString();
        if (num < 1000000) return `${ (num / 1000).toFixed(1) }k`;
        if (num < 1000000000) return `${ (num / 1000000).toFixed(1) }m`;
        if (num < 1000000000000) return `${ (num / 1000000000).toFixed(1) }b`;
    }

    initTooltip(plotArea: PlotArea, scales: PlotScales, opt?: any) {

        let rpmPlotColor = opt && opt.rpmPlotColor || this.defaultRpmPlotColor;
        let fpmPlotColor = opt && opt.fpmPlotColor || this.defaultFpmPlotColor;

        let tooltip = plotArea.area.append("g")
            .attr("class", "tooltip");
        let clip = tooltip.append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", plotArea.width).attr("height", plotArea.height)
            .attr("fill", "transparent");

        let tooltipSize: number;
        if (plotArea.width >= plotArea.height) {
            tooltipSize = Math.min(60, 60 * plotArea.height / 300);
        } else {
            tooltipSize = Math.min(60, 60 * plotArea.width / 1000);
        }

        let line = tooltip.append("g")
            .attr("font-family", "monospace")
            .attr("font-size", tooltipSize / 5)
            .attr("visibility", "hidden");
        line.append("line")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", 0).attr("y2", plotArea.height)
            .attr("stroke", "rgba(255, 255, 255, 0.5)")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", "4, 4");
        line.append("line")
            .attr("x1", -2).attr("y1", 0)
            .attr("x2", 2).attr("y2", 0)
            .attr("stroke", "#aaa")
            .attr("stroke-width", 1.5);

        let timeTooltipText = line.append("text")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "bottom")
            .attr("x", 0).attr("y", 0)
            .attr("dy", -5)
            .attr("fill", "#aaa");

        let rpmTooltip = line.append("g")
            .attr("transform", `translate(${ -tooltipSize * 1.2 }, 0)`);
        let rpmTooltipRect = rpmTooltip.append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", tooltipSize).attr("height", tooltipSize / 2)
            .attr("stroke", rpmPlotColor)
            .attr("stroke-width", Math.max(1, 2 * tooltipSize / 60))
            .attr("fill", "none");
        let rpmTooltipText = rpmTooltip.append("text")
            .attr("text-anchor", "end")
            .attr("x", tooltipSize - tooltipSize * 0.2)
            .attr("y", tooltipSize / 4)
            .attr("fill", rpmPlotColor)
            .attr("alignment-baseline", "central");

        let fpmTooltip = line.append("g")
            .attr("transform", `translate(${ tooltipSize * 0.2 }, 0)`);
        let fpmTooltipRect = fpmTooltip.append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", tooltipSize).attr("height", tooltipSize / 2)
            .attr("stroke", fpmPlotColor)
            .attr("stroke-width", Math.max(1, 2 * tooltipSize / 60))
            .attr("fill", "none");
        let fpmTooltipText = fpmTooltip.append("text")
            .attr("text-anchor", "start")
            .attr("x", tooltipSize * 0.2)
            .attr("y", tooltipSize / 4)
            .attr("fill", fpmPlotColor)
            .attr("alignment-baseline", "central");

        let fpmPlot = plotArea.area.select<SVGGElement>(".fpm-plot");
        let rpmPlot = plotArea.area.select<SVGGElement>(".rpm-plot");
        tooltip.on("mousemove", () => {
                let dx = d3Selection.mouse(plotArea.area.node())[0];
                line.interrupt();
                line.attr("transform", `translate(${ dx }, 0)`);
                // FIXME: quick lookup
                let time = Math.round(scales.time.invert(dx).getTime() / 1000);
                let dataIdx = 0;
                while (dataIdx < this.timeSortedData.length && this.timeSortedData[dataIdx].time < time) {
                    dataIdx++;
                }
                let data: RequestsDataItem = this.data[dataIdx];

                rpmTooltipText.text(this.shortenNumber(data.rpm));
                let rpmTooltipTextBBox = (<SVGTextElement>rpmTooltipText.node()).getBBox();
                rpmTooltipRect.attr("x", rpmTooltipTextBBox.x - tooltipSize * 0.2)
                    .attr("width", rpmTooltipTextBBox.width + tooltipSize * 0.4);

                fpmTooltipText.text(this.shortenNumber(data.fpm));
                let fpmTooltipTextBBox = (<SVGTextElement>fpmTooltipText.node()).getBBox();
                fpmTooltipRect.attr("width", fpmTooltipTextBBox.width + tooltipSize * 0.4);

                timeTooltipText.text(moment.unix(data.time).format("MM-DD HH:mm"));
                this.highlight(fpmPlot, rpmPlot, dataIdx);
            })
            .on("mouseleave", () => {
                line.attr("visibility", "hidden");
                this.clearHighlights(fpmPlot, rpmPlot);
            })
            .on("mouseenter", () => {
                line.attr("visibility", "visible");
            });
    }

    onUpdateDiagram() {
        this.clearDiagram();
        this.onDrawDiagram();
    }

    onResizeDiagram() {
        if (this.redrawDelay >= 0) window.clearTimeout(this.redrawDelay);
        this.redrawDelay = window.setTimeout(() => {
        this.clearDiagram();
        this.onDrawDiagram();
            this.redrawDelay = undefined;
        }, 500);
    }

}
