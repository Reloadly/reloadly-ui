import { Component } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { tooltipCode } from './tooltip';
import { api } from './api';

@Component({
    selector: 'app-tooltip-example',
    templateUrl: './tooltip-example.component.html',
    styleUrls: ['./tooltip-example.component.scss']
})
export class TooltipExampleComponent {
    tooltipCode = tooltipCode;
    date = new Date();
    api: apiInterface[] = api;

    constructor() {

    }

    getCodeSample(name: string): string {
        return this.tooltipCode.filter((item: { name: string, code: string }) => name === item.name)[0].code
    }
}
