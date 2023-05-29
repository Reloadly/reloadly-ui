import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[reloadly-table]'
})
export class TableDirective {
    class: string = "reloadly-table";

    constructor() { }

    @HostBinding('class') get classes(): string {
        return this.class;
    }
}
