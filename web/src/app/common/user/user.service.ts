import { Injectable } from "@angular/core";

import { Connector } from "../connector.service";
import { UserDto } from "./user.dto";
import { UserVo } from "./user.vo";
import { LayoutBoxDto, LayoutDto } from "./layout.dto";

// TODO:
// user account management
@Injectable()
export class UserService {

    private userPreferences: Map<string, string>;

    constructor(
        private connector: Connector
    ) { }

    private mapToString(map: Map<string, string>): string {
        let obj: any = { };
        map.forEach((value, key) => obj[key] = value);
        return JSON.stringify(obj);
    }

    private strToMap(value: string): Map<string, string> {
        let map = new Map<string, string>();
        let obj;
        try { obj = JSON.parse(value); } catch (e) { obj = { }; }
        for (let k in obj) {
            if (k === undefined) continue;
            map.set(k, obj[k]);
        }
        return map;
    }

    getUserPreferences(): Promise<Map<string, string>> {
        return new Promise<Map<string, string>>((resolve, reject) => {
            if (this.userPreferences) return resolve(this.userPreferences);
            this.userPreferences = this.strToMap(window.localStorage.getItem("user_preferences"));
            if (!this.userPreferences) this.userPreferences = new Map<string, string>();
            resolve(this.userPreferences);
        });
    }

    updateUserPreferences(key: string, value: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.userPreferences.set(key, value);
            window.localStorage.setItem("user_preferences", this.mapToString(this.userPreferences));
            resolve();
        });
    }

    getUserLayouts(): Promise<Array<LayoutDto>> {
        return this.getUserPreferences()
        .then((preferences: Map<string, string>) => {
            let rawLayoutsData = preferences.get("layouts");
            let rawLayouts: Array<String> = rawLayoutsData !== undefined ? JSON.parse(rawLayoutsData) : [ ];
            return rawLayouts.map(LayoutDto.parse);
        });
    }

    saveLayout(layout: LayoutDto): Promise<void> {
        return this.getUserLayouts()
        .then((layouts: Array<LayoutDto>) => {
            let found = layouts.find((i) => i.name === layout.name);
            if (found) {
                found.boxes = layout.boxes;
                found.nodes = layout.nodes;
            } else {
                layouts.push(layout);
            }
            return this.updateUserPreferences("layouts", JSON.stringify(layouts.map((i) => i.stringify())));
        });
    }

    deleteLayout(layoutName: string): Promise<void> {
        return this.getUserLayouts()
        .then((layouts: Array<LayoutDto>) => {
            let found = layouts.findIndex((i) => i.name === layoutName);
            layouts.splice(found, 1);
            return this.updateUserPreferences("layouts", JSON.stringify(layouts.map((i) => i.stringify())));
        });
    }

}
