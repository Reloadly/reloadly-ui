import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[reloadly-menu-item]'
})
export class MenuItemDirective {
    class: string = "rld-menu-item";

    constructor() { }

    @HostBinding('class') get classes(): string {
        return this.class;
    }

}
