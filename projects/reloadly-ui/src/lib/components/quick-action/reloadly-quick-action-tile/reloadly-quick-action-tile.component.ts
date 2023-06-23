import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ReloadlyQuickActionService } from '../relaodly-quick-action';
import { QuickAction } from '../../../models/quick-action';

@Component({
    selector: 'reloadly-quick-action-tile',
    templateUrl: './reloadly-quick-action-tile.component.html',
    styleUrls: ['./reloadly-quick-action-tile.component.scss'],
})
export class ReloadlyQuickActionTileComponent {
    @Input() action?: QuickAction;

    constructor(public service: ReloadlyQuickActionService) { }
}
