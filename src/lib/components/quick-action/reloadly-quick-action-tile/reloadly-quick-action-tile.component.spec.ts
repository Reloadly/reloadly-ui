import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadlyQuickActionTileComponent } from './reloadly-quick-action-tile.component';

describe('ReloadlyQuickActionTileComponent', () => {
  let component: ReloadlyQuickActionTileComponent;
  let fixture: ComponentFixture<ReloadlyQuickActionTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadlyQuickActionTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloadlyQuickActionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
