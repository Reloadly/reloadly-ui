import { Component } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
import { inputCode } from './input';
import { api } from './api';

@Component({
    selector: 'app-input-group-example',
    templateUrl: './input-group-example.component.html',
    styleUrls: ['./input-group-example.component.scss'],
})
export class InputGroupExampleComponent {
    inputCode = inputCode;
    date = new Date();
    api: apiInterface[] = api;

    constructor() {

    }

    getCodeSample(name: string): codeModel {
        return this.inputCode.filter((item: codeBoxModel) => name === item.name)[0].code
    }
}
