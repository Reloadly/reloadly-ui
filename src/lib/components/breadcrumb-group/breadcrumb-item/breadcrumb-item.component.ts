import { AfterContentInit, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'reloadly-breadcrumb-item',
    templateUrl: './breadcrumb-item.component.html',
    styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent implements AfterContentInit {
    @Input() isActive: boolean = false;
    @ViewChild(TemplateRef) template!: TemplateRef<any>;
    index!: number;

    constructor(private changeDetection: ChangeDetectorRef) { }

    ngAfterContentInit(): void {
        this.changeDetection.detectChanges();
    }
}
