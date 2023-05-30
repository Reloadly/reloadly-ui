import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchExampleComponent } from './switch-example.component';

describe('SwitchExampleComponent', () => {
  let component: SwitchExampleComponent;
  let fixture: ComponentFixture<SwitchExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
