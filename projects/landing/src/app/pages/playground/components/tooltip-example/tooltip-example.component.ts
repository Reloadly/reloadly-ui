import { Component } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
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

    getCodeSample(name: string): codeModel {
        return this.tooltipCode.filter((item: codeBoxModel) => name === item.name)[0].code
    }
}
