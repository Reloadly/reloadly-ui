import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {
    @Input('v2') v2: any;
    @Input('v3') v3: any;
    @Input('v4') v4: any;
    constructor() { }
}
