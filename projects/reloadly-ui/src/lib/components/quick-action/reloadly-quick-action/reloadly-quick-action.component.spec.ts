import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadlyQuickActionComponent } from './reloadly-quick-action.component';

describe('ReloadlyQuickActionComponent', () => {
  let component: ReloadlyQuickActionComponent;
  let fixture: ComponentFixture<ReloadlyQuickActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadlyQuickActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloadlyQuickActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
