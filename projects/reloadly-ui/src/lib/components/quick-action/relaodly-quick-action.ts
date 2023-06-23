import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuickAction, } from '../../models/quick-action';


@Injectable({
    providedIn: 'root',
})
export class ReloadlyQuickActionService {
    quickActionEvents$: BehaviorSubject<QuickAction[]> = new BehaviorSubject<QuickAction[]>([]);
    showQuickAction$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    constructor() { }

    showQuickAction(data: QuickAction): QuickAction {
        const actionWithRefId: QuickAction = { referenceId: `${this.quickActionEvents$.value.length}`, ...data };

        this.quickActionEvents$.next([actionWithRefId, ...this.quickActionEvents$.value]);
        this.showQuickAction$.next(true);
        return actionWithRefId;
    }

    dismissQuickAction(action: QuickAction) {
        setTimeout(() => {
            const filteredActions = this.quickActionEvents$.value.filter((a) => a.referenceId !== action.referenceId);
            this.quickActionEvents$.next(filteredActions.map((a, i) => ({ ...a, referenceId: `${i}` })));
            this.quickActionEvents$.value.length === 0 ? this.showQuickAction$.next(false) : this.showQuickAction$.next(true);

        }, 400)
    }
}
