import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: "ow-toolbar",
    templateUrl: "toolbar.template.html",
    styleUrls: [ "toolbar.style.scss" ]
})
export class Toolbar {

    constructor(
      private route: ActivatedRoute,
      private router: Router
    ) { }

    goto(page: string): void {
        this.router.navigate([`/${ page }`]);
    }

}
