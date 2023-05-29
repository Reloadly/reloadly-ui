import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionCardStyle } from 'dist/reloadly-ui/lib/enums/card-style';

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
    @Input() toggleValue = false;
    @Input() disableAction: boolean = true;
    @Input() cardStyle: ActionCardStyle = ActionCardStyle.basic;
    @Input() toggleTitle: String | undefined = 'Notify me';
    @Output() onActionClicked: EventEmitter<void> = new EventEmitter();
    @Output() onToggleChange: EventEmitter<boolean> = new EventEmitter();

    toggleChange() {
        this.toggleValue = !this.toggleValue;
        this.onToggleChange.emit(this.toggleValue);
    }
}
