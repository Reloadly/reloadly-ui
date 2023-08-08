import { Component } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
import { sidebarCode } from './tooltip';
import { api } from './api';

type Item = {
    label: string,
    link?: string
}
@Component({
    selector: 'app-sidebar-example',
    templateUrl: './sidebar-example.component.html',
    styleUrls: ['./sidebar-example.component.scss']
})

export class SidebarExampleComponent {
    sidebarCode = sidebarCode;
    date = new Date();
    api: apiInterface[] = api;

    links: Array<Item> = [
        {
            label: 'Overview',
            link: ''
        },
        {
            label: 'API Keys',
            link: ''
        },
        {
            label: 'Webhooks',
            link: ''
        },
        {
            label: 'API Logs',
            link: ''
        },
    ]
    altLinks: Array<Item> = [
        {
            label: 'Airtime',
            link: ''
        },
        {
            label: 'Giftcards',
            link: 'giftcards'
        },
        {
            label: 'Utility Payment',
            link: ''
        },
        {
            label: 'Payment History',
            link: ''
        },
    ]



    constructor() {

    }

    linkClicked(item: Item) {
        console.log("item ", item);
        //navigate here (item.link)
    }

    getCodeSample(name: string): codeModel {
        return this.sidebarCode.filter((item: codeBoxModel) => name === item.name)[0].code
    }

}
