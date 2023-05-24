import { BehaviorSubject, Subject } from 'rxjs';

export class ReloadlyDialogRef {
    onClose$ = new Subject<void>;
    onCancel$ = new Subject<void>;
    onAccept$ = new Subject<void>;
    customSharedData$ = new BehaviorSubject<any>(null);

    constructor() { }

    closeDialog(): void {
        this.onClose$.next();
        this.onClose$.complete();
    }

    cancel(): void {
        this.onCancel$.next();
        this.onCancel$.complete();
        this.onClose$.next();
        this.onClose$.complete();
    }

    accept(): void {
        this.onAccept$.next();
        this.onAccept$.complete();
        this.onClose$.next();
        this.onClose$.complete();
    }

}
