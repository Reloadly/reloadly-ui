import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadlyModalOutletComponent } from './reloadly-modal-outlet.component';

describe('ReloadlyModalOutletComponent', () => {
  let component: ReloadlyModalOutletComponent;
  let fixture: ComponentFixture<ReloadlyModalOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadlyModalOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloadlyModalOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
