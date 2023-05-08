import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'reloadly-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    top: number = 0;
    
    @Input() links: Array<Item> = [
        {
            label: 'Link 1',
            link: ''
        },
        {
            label: 'Link 2',
            link: ''
        },
        {
            label: 'Link 3',
            link: ''
        },
        {
            label: 'Link 4',
            link: ''
        },
    ]
    @Input() activeItem: Item = this.links[0];
    @ViewChild('menuList') menuList!: ElementRef;
    @Output() linkClicked: EventEmitter<Item> = new EventEmitter();
    constructor() {

    }

    selectItem(item:Item) {
        let checkItem = (<any>document.querySelector(`[customLabel="sideNav-${item.label}"]`));
        this.top = checkItem.offsetTop;
        this.activeItem = item;
        this.linkClicked.emit(item);
    }
}

type Item = {
    label: string,
    link?: string
}
