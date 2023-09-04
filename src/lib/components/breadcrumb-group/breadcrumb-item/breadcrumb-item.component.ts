import { Component, Input } from '@angular/core';

@Component({
    selector: 'reloadly-breadcrumb-item',
    templateUrl: './breadcrumb-item.component.html',
    styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent {
    @Input() isActive: boolean = false;
}
