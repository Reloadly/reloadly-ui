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

    constructor(
    ) { }

    ngOnInit() {
        this.setColor()

    }

    setColor() {
        this.class += " " + this.variant
    }

}

export type BadgeVariant = "neutral" | "info" | "positive" | "warning" | "negative" | "urgent";
