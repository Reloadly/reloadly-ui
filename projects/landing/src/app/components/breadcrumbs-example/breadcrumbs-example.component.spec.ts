import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsExampleComponent } from './breadcrumbs-example.component';

describe('BreadcrumbsExampleComponent', () => {
  let component: BreadcrumbsExampleComponent;
  let fixture: ComponentFixture<BreadcrumbsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
