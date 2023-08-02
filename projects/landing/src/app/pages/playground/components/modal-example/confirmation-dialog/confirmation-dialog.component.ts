import { Component, Inject, OnInit } from '@angular/core';
import { RELOADLY_DIALOG_DATA, ReloadlyDialogRef } from 'reloadly-ui';

@Component({
    selector: 'reloadly-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
    constructor(
        public dialogRef: ReloadlyDialogRef,
        @Inject(RELOADLY_DIALOG_DATA) private inputData: { text: string }
    ) { }

    ngOnInit(): void {
        console.log(this.inputData);
        this.dialogRef.customSharedData$.next({ response: "'You choose confirm'" });
        this.dialogRef.onCancel$.subscribe(() => {
            this.dialogRef.closeDialog();
            alert(`You chose cancel`);
        });
    }
}
