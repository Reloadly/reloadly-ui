import { AfterContentInit, Component, ContentChildren, OnDestroy, QueryList, ViewContainerRef } from '@angular/core';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

@Component({
    selector: 'reloadly-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class ReloadlyBreadcrumbsComponent implements AfterContentInit, OnDestroy {
    @ContentChildren(BreadcrumbItemComponent) private _contents!: QueryList<BreadcrumbItemComponent>;
    @ContentChildren(BreadcrumbItemComponent, { read: ViewContainerRef }) private contentsRef!: QueryList<ViewContainerRef>;
    private isContentInit = false;
    private activeIndex = 0;
    maxIndex = 0;
    contents!: Array<BreadcrumbItemComponent>;

    constructor() { }

    ngAfterContentInit(): void {
        this.isContentInit = true;
        this.setActiveIndex(this.activeIndex);
        this.contents = this._contents.toArray();
    }

    ngOnDestroy(): void {
        this.contentsRef.forEach(c => c.clear());
    }

    setActiveIndex(index: number): void {
        if (!this.isContentInit) {
            this.activeIndex = index;
        } else {
            this._contents.forEach((c, index) => {
                c.isActive = false;
                c.index = index;
                this.maxIndex = index;
            });
            this._contents.toArray()[index].isActive = true;
        }
    }
}
