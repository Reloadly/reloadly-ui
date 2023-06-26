import { Component } from '@angular/core';
import { ReloadlyQuickActionService } from './quick-action.service';
import { QuickAction } from '../../models/quick-action';


@Component({
    selector: 'reloadly-quick-action',
    templateUrl: './quick-action.component.html',
    styleUrls: ['./quick-action.component.scss'],
})
export class ReloadlyQuickActionComponent {

    constructor(public service: ReloadlyQuickActionService) { }

    topRight(actions: QuickAction[]): QuickAction[] {
        return actions.filter(action => action.position === 'topRight');
    }

    topLeft(actions: QuickAction[]): QuickAction[] {
        return actions.filter(action => action.position === 'topLeft');
    }

    bottomRight(actions: QuickAction[]): QuickAction[] {
        return actions.filter(action => action.position === 'bottomRight' || !action.position);
    }

    bottomLeft(actions: QuickAction[]): QuickAction[] {
        return actions.filter(action => action.position === 'bottomLeft');
    }
}
