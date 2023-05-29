import { Component, ElementRef, Input, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'reloadly-step',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss']
})
export class StepComponent {
    index: number | null;

    constructor(public el: ElementRef) {
        this.index = null;
    }
}
