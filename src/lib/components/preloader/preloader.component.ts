import { Component, Input } from '@angular/core';

@Component({
    selector: 'reloadly-preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {
    @Input('variant') variant: "" | "v2" | "v3" | "v4" = ""; //@TODO: please update in the dashboard accordingly.

    constructor() { }
}
