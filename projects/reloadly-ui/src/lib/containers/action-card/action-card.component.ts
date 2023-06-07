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
    @Input() cardWidth: string = '384px';
    @Input() cardHeight: string = '225px';
    @Input() toggleValue = false;
    @Input() disableAction: boolean = false;
    @Input() hasDropShadow = false;
    @Input() cardStyle: 'basic' | 'balanceCardStyle' | 'walletRechargeCardStyle' = 'basic';
    @Input() toggleTitle: String | undefined = 'Notify me';
    @Input() actionBtnAlignment: 'full' | 'start' | 'end' | 'center' = 'start';
    @Input() actionBtnBorderStyle: 'rounded' | 'rectangular' = 'rounded';
    @Output() onActionClicked: EventEmitter<void> = new EventEmitter();
    @Output() onToggleChange: EventEmitter<boolean> = new EventEmitter();

    toggleChange() {
        this.toggleValue = !this.toggleValue;
        this.onToggleChange.emit(this.toggleValue);
    }
}
