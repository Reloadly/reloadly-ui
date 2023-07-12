import { Component } from '@angular/core';
import { breadcrumbsCode } from './breadcrumbs';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { api } from './api';
import { codeModel } from '../../../../shared/components/code-box/models';

@Component({
    selector: 'app-breadcrumbs-example',
    templateUrl: './breadcrumbs-example.component.html',
    styleUrls: ['./breadcrumbs-example.component.scss']
})
export class BreadcrumbsExampleComponent {
    badgesCode = breadcrumbsCode;
    api: apiInterface[] = api;

    constructor() {

    }

    getCodeSample(): codeModel {
        return this.badgesCode[0].code
    }

}
