import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuickAction, QuickActionInterface } from '../../models/quick-action';


@Injectable({
    providedIn: 'root',
})
export class ReloadlyQuickActionService {
    quickActionEvents$: BehaviorSubject<QuickAction[]> = new BehaviorSubject<QuickAction[]>([]);
    showQuickAction$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor() { }

    /**
     * Shows a quick action
     * @param {QuickActionInterface} data
     * @return {*}  {QuickAction}
     * @memberof ReloadlyQuickActionService
     */
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

    /**
     * Dismisses a quick action
     * @param {QuickAction} action
     * @memberof ReloadlyQuickActionService
     */
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
