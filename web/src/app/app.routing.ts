import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Dashboard } from "./dashboard/dashboard.component";
import { History } from "./history/history.component";
import { Layout } from "./layout/layout.component";

const appRoutes: Routes = [{
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
}, {
    path: "dashboard",
    component: Dashboard
}, {
    path: "history",
    component: History
}, {
    path: "layout",
    component: Layout
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
