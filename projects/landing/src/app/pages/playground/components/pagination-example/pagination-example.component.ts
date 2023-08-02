import { Component, OnInit } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeModel } from '../../../../shared/components/code-box/models';
import { paginationCode } from './pagination';
import { api } from './api';

@Component({
    selector: 'app-pagination-example',
    templateUrl: './pagination-example.component.html',
    styleUrls: ['./pagination-example.component.scss']
})
export class PaginationExampleComponent implements OnInit {
    paginationCode = paginationCode;
    api: apiInterface[] = api;
    paginatedData: any;

    page: number = 1;
    size: number = 3;
    total: number = 11;
    data = Array.from(Array(11).keys());

    constructor() {
    }

    ngOnInit() {
        this.paginatedData = this.data.slice(0, this.size);
    }

    getCodeSample(): codeModel {
        return this.paginationCode[0].code
    }


    changePage(event: any) {
        this.page = event.page;
        this.paginatedData = this.data.slice((this.page - 1) * this.size, this.page * this.size);
    }
}
