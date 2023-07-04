import { Component } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
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

    getCodeSample(name: string): string {
        return this.inputCode.filter((item: { name: string, code: string }) => name === item.name)[0].code
    }

}
