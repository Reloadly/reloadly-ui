import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupExampleComponent } from './input-group-example.component';

describe('InputGroupExampleComponent', () => {
  let component: InputGroupExampleComponent;
  let fixture: ComponentFixture<InputGroupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputGroupExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputGroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
