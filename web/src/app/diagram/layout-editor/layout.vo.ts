export interface LayoutVo {
    boxes: Map<string, BoxVo>;
    nodes: Map<string, string>;
}

export interface Pos {
    x: number;
    y: number;
}

export interface BoxVo extends Pos {
    id: string;
    width: number;
    height: number;
}

export interface NodeVo extends Pos {
    name: string;
    boxId: string;
}
