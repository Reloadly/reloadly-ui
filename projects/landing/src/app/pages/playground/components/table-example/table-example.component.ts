import { Component } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
import { tooltipCode } from './table';
import { api } from './api';

@Component({
    selector: 'app-table-example',
    templateUrl: './table-example.component.html',
    styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent {
    tooltipCode = tooltipCode;
    date = new Date();
    api: apiInterface[] = api;

    constructor() {

    }

    getCodeSample(name: string): codeModel {
        return this.tooltipCode.filter((item: codeBoxModel) => name === item.name)[0].code
    }
}
