import { BehaviorSubject, Observable, Subject } from 'rxjs';

export class ReloadlyDialogRef {
    private _onClose$ = new Subject<void>;
    private _onCancel$ = new Subject<void>;
    private _onAccept$ = new Subject<void>;
    customSharedData$ = new BehaviorSubject<any>(null);

    constructor() { }

    get onAccept$(): Observable<void> {
        return this._onAccept$.asObservable();
    }

    get onClose$(): Observable<void> {
        return this._onClose$.asObservable();
    }

    get onCancel$(): Observable<void> {
        return this._onCancel$.asObservable();
    }

    closeDialog(): void {
        this._onClose$.next();
        this._onClose$.complete();
    }

    cancel(): void {
        this._onCancel$.next();
        this._onCancel$.complete();
        this._onClose$.next();
        this._onClose$.complete();
    }

    accept(): void {
        this._onAccept$.next();
        this._onAccept$.complete();
        this._onClose$.next();
        this._onClose$.complete();
    }

    getCustomSharedData<T>(): BehaviorSubject<T> {
        return this.customSharedData$;
    }

}
