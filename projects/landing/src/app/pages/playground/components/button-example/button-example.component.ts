import { Component } from '@angular/core';
import { buttonsCode } from './buttons';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
import { api } from './api';

@Component({
    selector: 'app-button-example',
    templateUrl: './button-example.component.html',
    styleUrls: ['./button-example.component.scss'],
})
export class ButtonExampleComponent {
    disabled: boolean = false;
    dynamicClass: string = 'mr-4 mt-4 custom-button-class';
    buttonsCode = buttonsCode;
    api: apiInterface[] = api;

    constructor() {

    }

    getCodeSample(name: string): codeModel {
        return this.buttonsCode.filter((item: codeBoxModel) => name === item.name)[0].code
    }

}
