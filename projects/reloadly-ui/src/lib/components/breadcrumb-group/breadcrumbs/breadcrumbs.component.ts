import { Component, ContentChild, ContentChildren, Input, QueryList } from '@angular/core';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

@Component({
    selector: 'reloadly-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
    showItems: boolean = false;
    @Input() separator: string = '>';
    @ContentChildren(BreadcrumbItemComponent) items!: QueryList<any>;

    ngAfterContentInit() {
        // console.log(this.items);
        this.items.forEach(tabInstance => console.log(tabInstance));
        this.showItems = true;
        // contentChildren is set
    }
}
