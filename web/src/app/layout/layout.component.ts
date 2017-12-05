import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatSnackBar, MatDialog, MatDialogRef } from "@angular/material";
import { LayoutEditor } from "../diagram/layout-editor/layout-editor.component";
import { UserService } from "../common/user/user.service";
import { SystemInfoService } from "../common/system-info/system-info.service";

import { LayoutVo, BoxVo } from "../diagram/layout-editor/layout.vo";
import { LayoutDto, LayoutBoxDto } from "../common/user/layout.dto";

@Component({
    selector: "ow-layout",
    templateUrl: "layout.template.html",
    styleUrls: [ "layout.style.scss" ]
})
export class Layout implements OnInit {

    private newSystem = "";
    private boxes: Set<string> = new Set<string>();
    private selectedLayout: LayoutDto | "null" = "null";
    private layouts: Array<LayoutDto> = [ ];
    private layoutInputCtrl: FormControl = new FormControl();
    private layoutName: string;
    private isNew = true;
    @ViewChild("editor") private layoutEditor: LayoutEditor;

    constructor(
        private snackBar: MatSnackBar,
        private dialog: MatDialog,
        private userService: UserService,
        private systemInfoService: SystemInfoService
    ) { }

    ngOnInit() {
        this.layoutInputCtrl.valueChanges.subscribe((input: LayoutDto | "null") => {
            if (input === undefined) return;
            let layout: LayoutDto;
            layout = input === "null" ? null : input;
            this.isNew = layout === null;
            this.layoutName = layout === null ? null : layout.name;
            if (layout !== null) this.showLayout(layout);
            else this.layoutEditor.clear();
        });
        this.userService.getUserLayouts()
        .then((layouts: Array<LayoutDto>) => {
            this.layouts = layouts;
            this.selectedLayout = "null";
        });
    }

    private showLayout(layout: LayoutDto): void {
        this.layoutEditor.clear();
        this.boxes.clear();
        layout.boxes.forEach((box: LayoutBoxDto, id: string) => this.layoutEditor.addBox(id, box.x, box.y, box.width, box.height));
        layout.nodes.forEach((boxId: string, name: string) => this.layoutEditor.addNode(name, boxId));
    }

    addNode() {
        if (this.newSystem.trim().length === 0) return;
        this.layoutEditor.addNode(this.newSystem, "");
        this.newSystem = "";
    }

    removeNode(node: string) {
        this.layoutEditor.removeNode(node);
    }

    addBox() {
        if (this.boxes.size >= 10) return;
        let id: string;
        do { id = Math.round(Math.random() * 100).toString(); }
        while (this.boxes.has(id));
        this.layoutEditor.addBox(id, 100, 100, 200, 100);
    }

    removeBox(boxId: string) {
        this.layoutEditor.removeBox(boxId);
        this.boxes.delete(boxId);
    }

    save() {
        if (this.isNew) {
            let dialogRef = this.dialog.open(LayoutNameInputDialog);
            dialogRef.afterClosed().subscribe(result => {
                if (result && result.trim().length > 0) {
                    this.layoutName = result;
                    this.doSave(result, true);
                }
            });
        } else {
            this.doSave(this.layoutName, false);
        }
    }

    private doSave(layoutName: string, isNew: boolean) {
        let layoutVo: LayoutVo = this.layoutEditor.save();

        let layoutDto: LayoutDto = new LayoutDto();
        layoutDto.name = layoutName;
        layoutVo.boxes.forEach((box: BoxVo, boxId: string) => layoutDto.boxes.set(boxId, {
            x: box.x, y: box.y, width: box.width, height: box.height
        }));
        layoutVo.nodes.forEach((boxId: string, name: string) => layoutDto.nodes.set(name, boxId));

        this.userService.saveLayout(layoutDto)
        .then(() => {
            if (isNew) {
                this.layouts.push(layoutDto);
                this.selectedLayout = layoutDto;
            } else {
                let layout = this.layouts.find((l) => layoutDto.name === l.name);
                layout.nodes = layoutDto.nodes;
                layout.boxes = layoutDto.boxes;
            }
            this.snackBar.open("Layout Saved!", "Done", {
                duration: 2000
            });
        });
    }

    delete() {
        let found = this.layouts.findIndex((layout) => layout.name === this.layoutName);
        if (found < 0) return;
        this.userService.deleteLayout(this.layoutName)
        .then(() => {
            this.layouts.splice(found, 1);
            this.selectedLayout = "null";
            this.layoutName = undefined;
            this.snackBar.open("Layout Deleted!", "Done", {
                duration: 2000
            });
        });
    }

}

@Component({
    selector: "layout-name-input-dialog",
    templateUrl: "./layout-name-input-dialog.template.html",
})
export class LayoutNameInputDialog {

    private layoutName: string;

    constructor(public dialogRef: MatDialogRef<LayoutNameInputDialog>) { }

    cancel() {
        this.dialogRef.close();
    }

    confirm() {
        this.dialogRef.close(this.layoutName);
    }

}
