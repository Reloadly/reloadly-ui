import { Component, Input, ViewEncapsulation, } from '@angular/core';

@Component({
    selector: 'reloadly-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
    @Input() trigger: HTMLElement | undefined;
    left: number = 0;
    top: number = 0;

    constructor() { }

    ngOnInit(): void {
        if (this.trigger) {
            const { bottom, left, right } = this.trigger.getBoundingClientRect()
            this.top = bottom
            this.left = (right - left) / 2 + left
        }
    }

    handleOverlayClick() {
        this.trigger?.click();
    }
}
