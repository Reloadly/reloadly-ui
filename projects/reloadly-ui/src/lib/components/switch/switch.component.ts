import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'reloadly-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
    @Input() size: 'medium' | 'small' = 'medium';
    @Input() type: 'default' | 'livemode' = 'default';
    @Input() disabled: boolean = false;
    @Input() label: string = '';
    @Input() description: string = '';
    @Input() toggle: boolean = false;
    @Output() toggleChange: EventEmitter<boolean> = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }

    toggleSwitch() {
        if (this.disabled) return;

        this.toggle = !this.toggle;
        this.toggleChange.emit(this.toggle);
    }
}
