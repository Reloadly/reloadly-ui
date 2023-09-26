import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'reloadly-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss']
})
export class ReloadlyAccordionComponent {
    @Input() title?: string;
    @Input() disabled: boolean = false;
    @Output() onToggle: EventEmitter<boolean> = new EventEmitter();


    isOpen: boolean = false;

    toggle() {
        if (this.disabled) return;
        this.isOpen = !this.isOpen;
        this.onToggle.emit(this.isOpen);
    }
}
