import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar-example',
    templateUrl: './sidebar-example.component.html',
    styleUrls: ['./sidebar-example.component.scss']
})
export class SidebarExampleComponent {
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
            link: ''
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

    }
}
type Item = {
    label: string,
    link?: string
}