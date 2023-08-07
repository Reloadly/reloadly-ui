import { Component } from '@angular/core';
import { badgesCode } from './badges';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
import { api } from './api';

@Component({
    selector: 'app-badge-example',
    templateUrl: './badge-example.component.html',
    styleUrls: ['./badge-example.component.scss'],
})
export class BadgeExampleComponent {
    badgesCode = badgesCode;
    api: apiInterface[] = api;

    constructor() {

    }

    getCodeSample(name: string): codeModel {
        return this.badgesCode.filter((item: codeBoxModel) => name === item.name)[0].code
    }

}
