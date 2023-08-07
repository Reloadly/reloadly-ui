import { Component } from '@angular/core';
import { SelectOptionItem } from 'reloadly-ui';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { selectCode } from './select';
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

    getCodeSample(name: string): codeModel {
        return this.selectCode.filter((item: codeBoxModel) => name === item.name)[0].code
    }

}
