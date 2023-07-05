import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperExampleComponent } from './stepper-example.component';

describe('StepperExampleComponent', () => {
  let component: StepperExampleComponent;
  let fixture: ComponentFixture<StepperExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
