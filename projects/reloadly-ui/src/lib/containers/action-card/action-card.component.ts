import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent {
    @Input() title: string = '';
    @Input() value: string = '';
    @Input() actionText: string = '';
    @Input() cardWidth: string = '302px';
    @Input() cardHeight: string = '153px';
    @Input() disableAction: boolean = true;
    @Input() toggleTitle: String | undefined = 'Notify me';
    @Output() onActionClicked: EventEmitter<void> = new EventEmitter();
    @Output() onToggleChange: EventEmitter<boolean> = new EventEmitter();


    toggleValue = false;


    toggleChange() {
        this.toggleValue= !this.toggleValue;
        this.onToggleChange.emit(this.toggleValue);
    }
}
