import { Component } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeModel } from '../../../../shared/components/code-box/models';
import { datePickerCode } from './date-picker';
import { api } from './api';

@Component({
    selector: 'app-date-example',
    templateUrl: './date-example.component.html',
    styleUrls: ['./date-example.component.scss']
})
export class DateExampleComponent {
    datePickerCode = datePickerCode;
    date = new Date();
    api: apiInterface[] = api;

    constructor() {

    }

    getCodeSample(): codeModel {
        return this.datePickerCode[0].code
    }
}
