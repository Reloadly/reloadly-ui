import { Component } from '@angular/core';
import { preloaderCode } from './preloader';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeModel } from '../../../../shared/components/code-box/models';
import { api } from './api';

@Component({
    selector: 'app-preloader-example',
    templateUrl: './preloader-example.component.html',
    styleUrls: ['./preloader-example.component.scss']
})
export class PreloaderExampleComponent {
    preloaderCode = preloaderCode;
    api: apiInterface[] = api;
    loading = true;

    constructor() {

    }

    getCodeSample(): codeModel {
        return this.preloaderCode[0].code
    }

}
