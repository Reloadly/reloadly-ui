import { AfterContentInit, Component, ContentChildren, OnDestroy, QueryList, ViewContainerRef } from '@angular/core';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

@Component({
    selector: 'reloadly-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements AfterContentInit, OnDestroy {
    @ContentChildren(BreadcrumbItemComponent) contents!: QueryList<BreadcrumbItemComponent>;
    @ContentChildren(BreadcrumbItemComponent, { read: ViewContainerRef }) contentsRef!: QueryList<ViewContainerRef>;
    private isContentInit = false;
    private setIndexOnInit: number | null = null;

    constructor() { }

    ngAfterContentInit(): void {
        this.isContentInit = true;
        if (typeof this.setIndexOnInit == 'number') {
            this.setActiveIndex(this.setIndexOnInit);
        }
    }

    ngOnDestroy(): void {
        this.contentsRef.forEach(c => c.clear());
    }

    setActiveIndex(index: number): void {
        if (!this.isContentInit) {
            this.setIndexOnInit = index;
        } else {
            this.contents.forEach(c => c.isActive = false);
            this.contents.toArray()[index].isActive = true;
        }
    }
}
