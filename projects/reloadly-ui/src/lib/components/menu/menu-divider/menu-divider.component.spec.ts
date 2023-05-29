import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDividerComponent } from './menu-divider.component';

describe('MenuDividerComponent', () => {
  let component: MenuDividerComponent;
  let fixture: ComponentFixture<MenuDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDividerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
