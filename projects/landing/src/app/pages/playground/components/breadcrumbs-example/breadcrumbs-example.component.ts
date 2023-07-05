import { Component } from '@angular/core';
import { breadcrumbsCode } from './breadcrumbs';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { api } from './api';

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

    getCodeSample(): string {
        return this.badgesCode[0].code
    }

}
