import { Component } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
import { ReloadlyModal } from 'reloadly-ui';
import { menuCode } from './modal';
import { api } from './api';

@Component({
    selector: 'app-modal-example',
    templateUrl: './modal-example.component.html'
})
export class ModalExampleComponent {
    menuCode = menuCode;
    api: apiInterface[] = api;

    constructor(
        private modal: ReloadlyModal
    ) {

    }

    getCodeSample(name: string): codeModel {
        return this.menuCode.filter((item: codeBoxModel) => name === item.name)[0].code
    }

    action() {

    }

    openModal() {
        const dialog = this.modal.openDialog(ConfirmationDialogComponent, {
            data: 'Hello from my modal'
        });

        dialog.onAccept$.subscribe(() => {
            const resp = dialog.getCustomSharedData<{ resp: string }>().getValue();
            console.log(resp);
        });
    }
}
