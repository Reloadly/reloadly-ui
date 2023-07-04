import { Component, Inject, OnInit } from '@angular/core';
import { RELOADLY_DIALOG_DATA, ReloadlyDialogRef } from 'reloadly-ui';

@Component({
    selector: 'reloadly-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent implements OnInit {
    constructor(
        public dialogRef: ReloadlyDialogRef,
        @Inject(RELOADLY_DIALOG_DATA) private inputData: { text: string }
    ) { }

    ngOnInit(): void {
        this.dialogRef.customSharedData$.next({ word: "'Custom shared data'" });
        this.dialogRef.onCancel$.subscribe(() => {
            this.dialogRef.closeDialog();
            setTimeout(() => alert(`You chose cancel, and your input data was: ${this.inputData?.text}`), 1000);
        });
    }
}
