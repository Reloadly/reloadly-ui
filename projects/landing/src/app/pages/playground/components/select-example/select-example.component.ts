import { Component } from '@angular/core';
import { SelectOptionItem } from 'reloadly-ui';
import { selectCode } from './select';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { api } from './api';


@Component({
    selector: 'app-select-example',
    templateUrl: './select-example.component.html',
    styleUrls: ['./select-example.component.scss']
})
export class SelectExampleComponent {
    options: SelectOptionItem[] = [
        { label: 'Option One', value: 'Option-1' },
        { label: 'Option Two', value: 'Option-2' },
        { label: 'Option Three', value: 'Option-3' },
        { label: 'Option Four', value: 'Option-4' }
    ];

    selectCode = selectCode;
    api: apiInterface[] = api;

    constructor() {

    }

    getCodeSample(name: string): string {
        return this.selectCode.filter((item: { name: string, code: string }) => name === item.name)[0].code
    }

}
