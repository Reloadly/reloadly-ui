import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadlyUiComponent } from './reloadly-ui.component';

describe('ReloadlyUiComponent', () => {
  let component: ReloadlyUiComponent;
  let fixture: ComponentFixture<ReloadlyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadlyUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloadlyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
