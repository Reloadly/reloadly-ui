import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'reloadly-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
    top: number = 0;
    left: number = 0;

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

    @Input() isHorizontal: boolean = false;
    @Input() activeItem: Item = this.links[0];
    @ViewChildren('menuList') menuList!: QueryList<ElementRef>;
    @Output() linkClicked: EventEmitter<Item> = new EventEmitter();

    indicatorWidth: number = 0;

    constructor(private cdRef: ChangeDetectorRef) {
    }

    selectItem(item: Item) {
        let checkItem = (<any>document.querySelector(`[customLabel="sideNav-${item.label}"]`));
        this.isHorizontal ? this.left = checkItem.offsetLeft : this.top = checkItem.offsetTop;
        this.isHorizontal ? this.indicatorWidth = checkItem.offsetWidth : null;
        this.activeItem = item;
        this.linkClicked.emit(item);
    }

    ngAfterViewInit(): void {
        if (this.activeItem != this.links[0] && this.activeItem.link != '') {
            setTimeout(() => {
                this.selectItem(this.activeItem);
            }, 0);
            return;
        }

        let checkItem = this.menuList.get(0)?.nativeElement;
        this.isHorizontal ? this.indicatorWidth = checkItem.offsetWidth : null;
        this.cdRef.detectChanges()
    }

}

type Item = {
    label: string,
    link?: string
}
