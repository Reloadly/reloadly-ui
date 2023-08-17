import { Component, Input } from '@angular/core';

@Component({
    selector: 'reloadly-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
    protected class: string = '';
    @Input() variant: BadgeVariant = "neutral"
    @Input() showIcon: boolean = false
    @Input() shape: BadgeShape = 'rectangular';
    @Input() position: BadgePosition = 'inline';
    //@TODO: needs to be refactored, remove showIcon input

    constructor(
    ) { }

    ngOnInit() {
        this.setColor()

    }

    setColor() {
        this.class += ` ${this.variant} ${this.shape} ${this.position}`
    }

}

export type BadgeVariant = "neutral" | "info" | "positive" | "warning" | "negative" | "urgent" | "notification";
export type BadgeShape = "circular" | "rounded" | "rectangular";
export type BadgePosition = "topLeft" | "topRight" | "inline";
