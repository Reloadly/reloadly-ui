import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentToggleComponent } from './environment-toggle.component';

describe('EnvironmentToggleComponent', () => {
  let component: EnvironmentToggleComponent;
  let fixture: ComponentFixture<EnvironmentToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
