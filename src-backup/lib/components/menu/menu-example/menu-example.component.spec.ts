import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExampleComponent } from './menu-example.component';

describe('MenuExampleComponent', () => {
  let component: MenuExampleComponent;
  let fixture: ComponentFixture<MenuExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
