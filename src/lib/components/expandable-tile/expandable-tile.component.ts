import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'reloadly-expandable-tile',
  templateUrl: './expandable-tile.component.html',
  styleUrls: ['./expandable-tile.component.scss']
})
export class ReloadlyExpandableTileComponent {
    @Input() title?: string;
    @Input() disabled: boolean = false;
    @Input() width: string = '176px'
    @Output() onToggle: EventEmitter<boolean> = new EventEmitter();


    isOpen: boolean = false;

    toggle() {
        if (this.disabled) return;
        this.isOpen = !this.isOpen;
        this.onToggle.emit(this.isOpen);
    }
}
