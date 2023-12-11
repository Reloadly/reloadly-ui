import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadlyAccordionComponent } from './accordion.component';

describe('ReloadlyAccordionComponent', () => {
  let component: ReloadlyAccordionComponent;
  let fixture: ComponentFixture<ReloadlyAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReloadlyAccordionComponent]
    });
    fixture = TestBed.createComponent(ReloadlyAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
