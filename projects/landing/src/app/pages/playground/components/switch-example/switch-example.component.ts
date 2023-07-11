import { Component } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
import { switchCode } from './switch';
import { api } from './api';

@Component({
    selector: 'app-switch-example',
    templateUrl: './switch-example.component.html',
    styleUrls: ['./switch-example.component.scss']
})
export class SwitchExampleComponent {
    switchCode = switchCode;
    date = new Date();
    api: apiInterface[] = api;

    constructor() {
    }

    getCodeSample(name: string): codeModel {
        return this.switchCode.filter((item: codeBoxModel) => name === item.name)[0].code
    }
}
