import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[reloadly-button]'
})
export class ButtonDirective {
    protected class: string = 'reloadly-btn';

    @Input() rounded: boolean = false;
    @Input() variant: ButtonVariant = "filled"
    @Input() color: ButtonColor = "primary"
    @Input() size: ButtonSize = "lg"

    constructor() { }

    ngOnInit() {
        this.setColor()
        this.setRounded()
        this.setVariant()
        this.setSize()
    }

    setColor() {
        this.class += " " + this.color
    }

    setRounded() {
        this.rounded ? this.class += ' rounded' : '';
    }

    setVariant() {
        this.class += " " + this.variant
    }

    setSize() {
        this.class += " " + this.size
    }

    @HostBinding('class') get classes(): string {
        return this.class;
    }

}

type ButtonVariant = "filled" | "outlined" | "text" | "elevated" | "tonal"
type ButtonColor = "primary" | "secondary" | "white" | "danger"
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl"


