import { Component } from '@angular/core';
import { codeModel } from '../../../../shared/components/code-box/models';
import { apiInterface } from 'projects/landing/src/app/shared/components/api-table/models';
import { tableCode } from './table';
import { api } from './api';


@Component({
    selector: 'app-table-example',
    templateUrl: './table-example.component.html',
    styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent {
    tableCode = tableCode;
    date = new Date();
    api: apiInterface[] = api

    constructor() {

    }

    getCodeSample(): codeModel {
        return this.tableCode[0].code
    }
}
