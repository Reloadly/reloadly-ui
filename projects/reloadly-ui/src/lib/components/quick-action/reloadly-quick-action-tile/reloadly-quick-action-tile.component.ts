import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuickAction } from '../../../models/quick-action';
import { ReloadlyQuickActionService } from '../quick-action.service';

@Component({
    selector: 'reloadly-quick-action-tile',
    templateUrl: './reloadly-quick-action-tile.component.html',
    styleUrls: ['./reloadly-quick-action-tile.component.scss'],
})
export class ReloadlyQuickActionTileComponent {
    @Input() action?: QuickAction;
    @Output() dismiss: EventEmitter<QuickAction> = new EventEmitter<QuickAction>();
    constructor() { }
}
