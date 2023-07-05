import { Component } from '@angular/core';
import { menuCode } from './menu';
import { apiInterface } from '../../../../shared/components/api-table/models';
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

    getCodeSample(name: string): string {
        return this.menuCode.filter((item: { name: string, code: string }) => name === item.name)[0].code
    }

    action() {

    }
}
