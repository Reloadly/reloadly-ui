import { Component, ComponentRef, Renderer2} from '@angular/core';
import { QuickAction, QuickActionInterface } from '../../models/quick-action';
import { BehaviorSubject } from 'rxjs';


@Component({
    selector: 'reloadly-quick-action',
    templateUrl: './quick-action.component.html',
    styleUrls: ['./quick-action.component.scss'],
})
export class ReloadlyQuickActionComponent {

    quickActionEvents$: BehaviorSubject<QuickAction[]> = new BehaviorSubject<QuickAction[]>([]);
    showQuickAction$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    reloadlyQuickActionRef!: ComponentRef<any>;

    constructor(public renderer: Renderer2) {}

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

    showQuickAction(data: QuickActionInterface): QuickAction {

        const action: QuickAction = new QuickAction({ ...data });
        this.quickActionEvents$.next([action, ...this.quickActionEvents$.value]);
        this.showQuickAction$.next(true);
        if (data.autoDismiss) {
            setTimeout(() => {
                this.dismissQuickAction(action);
            }, data.autoDismissTimeout ?? 5000);
        }
        return action;
    }

    dismissQuickAction(action: QuickAction) {
        const indexOf = this.quickActionEvents$.value.findIndex((a) => a.referenceId === action.referenceId);
        if (indexOf > -1) {
            let actions = [...this.quickActionEvents$.value];
            actions[indexOf].toggleTransition();
            this.quickActionEvents$.next(actions);
        }
        setTimeout(() => {
            this.quickActionEvents$.next(this.quickActionEvents$.value.filter((a) => a.referenceId !== action.referenceId));
            this.quickActionEvents$.value.length === 0 ? this.showQuickAction$.next(false) : this.showQuickAction$.next(true);
        }, 500)
    }
}
