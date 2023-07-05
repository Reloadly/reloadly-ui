import { Component, Input } from '@angular/core';
import { apiInterface } from './models';

@Component({
    selector: 'app-api-table',
    templateUrl: 'api-table.component.html',
    styleUrls: ['./api-table.component.scss']
})


export class ApiTableComponent {
    codeViewOpen = false;
    disabled: boolean = false;
    dynamicClass: string = 'mr-4 mt-4 custom-button-class';
    tooltipTextCopy = 'Copy'
    tooltipTextCode = 'View code';
    @Input('type') type: 'component' | 'directive' | '' = '';
    @Input('name') name = '';
    @Input('data') data!: apiInterface[];

    constructor() {
    }

}
