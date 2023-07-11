import { Component } from '@angular/core';
import { menuCode } from './menu';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
import { api } from './api';

@Component({
    selector: 'app-menu-example',
    templateUrl: './menu-example.component.html',
    styleUrls: ['./menu-example.component.scss']
})
export class MenuExampleComponent {
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
