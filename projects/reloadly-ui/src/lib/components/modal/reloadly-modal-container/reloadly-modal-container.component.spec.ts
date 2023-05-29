import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadlyModalContainerComponent } from './reloadly-modal-container.component';

describe('ReloadlyModalContainerComponent', () => {
  let component: ReloadlyModalContainerComponent;
  let fixture: ComponentFixture<ReloadlyModalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadlyModalContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloadlyModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
