export interface LayoutBoxDto {
    x: number;
    y: number;
    width: number;
    height: number;
}

export class LayoutDto {

    name: string;
    boxes: Map<string, LayoutBoxDto>;
    nodes: Map<string, string>;

    constructor() {
        this.boxes = new Map<string, LayoutBoxDto>();
        this.nodes = new Map<string, string>();
    }

    public static parse(data: string): LayoutDto {
        let layout = new LayoutDto();
        let parsed: any = JSON.parse(data);
        layout.name = parsed.name;
        for (let boxId in parsed.boxes) {
            if (boxId === undefined) continue;
            let boxData = parsed.boxes[boxId];
            layout.boxes.set(boxId, {
                x: boxData.x, y: boxData.y, width: boxData.width, height: boxData.height
            });
        }
        for (let nodeName in parsed.nodes) {
            if (nodeName === undefined) continue;
            layout.nodes.set(nodeName, parsed.nodes[nodeName]);
        }
        return layout;
    }

    public stringify(): string {
        let obj = {
            name: this.name,
            boxes: { },
            nodes: { }
        };
        this.boxes.forEach((boxVo: LayoutBoxDto, boxId: string) => {
            obj.boxes[boxId] = {
                x: boxVo.x, y: boxVo.y, width: boxVo.width, height: boxVo.height
            };
        });
        this.nodes.forEach((boxId: string, nodeName: string) => {
            obj.nodes[nodeName] = boxId;
        });
        return JSON.stringify(obj);
    }

}
