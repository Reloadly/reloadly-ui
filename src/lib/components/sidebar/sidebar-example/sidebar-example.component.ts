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
    constructor() {

    }

    linkClicked(item: Item) {
        
    }
}
type Item = {
    label: string,
    link?: string
}