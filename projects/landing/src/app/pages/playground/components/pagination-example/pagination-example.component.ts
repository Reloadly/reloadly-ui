import { Component } from '@angular/core';
import { menuCode } from './pagination';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
import { api } from './api';

@Component({
    selector: 'app-pagination-example',
    templateUrl: './pagination-example.component.html',
    styleUrls: ['./pagination-example.component.scss']
})
export class PaginationExampleComponent {
    menuCode = menuCode;
    api: apiInterface[] = api;

    constructor() {

    }

    getCodeSample(name: string): codeModel {
        return this.menuCode.filter((item: codeBoxModel) => name === item.name)[0].code
    }

    action() {

    }
}
