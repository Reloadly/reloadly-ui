import { Subject } from 'rxjs';

export class ReloadlyDialogRef {
  onClose$ = new Subject<void>;
  onCancel$ = new Subject<void>;
  onAccept$ = new Subject<void>;
  customData: any;

  constructor() { }

  closeDialog(): void {
    this.onClose$.next();
    this.onClose$.complete();
  }

  cancel(): void {
    this.onCancel$.next();
    this.onCancel$.complete();
  }

  accept(): void {
    this.onAccept$.next();
    this.onAccept$.complete();
  }

}
