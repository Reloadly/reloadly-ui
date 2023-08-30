import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadlyBreadcrumbsComponent } from './breadcrumbs.component';

describe('ReloadlyBreadcrumbsComponent', () => {
    let component: ReloadlyBreadcrumbsComponent;
    let fixture: ComponentFixture<ReloadlyBreadcrumbsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReloadlyBreadcrumbsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ReloadlyBreadcrumbsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
