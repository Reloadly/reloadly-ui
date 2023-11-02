import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReloadlyExpandableTileComponent } from './expandable-tile.component';

describe('ReloadlyExpandableTileComponent', () => {
  let component: ReloadlyExpandableTileComponent;
  let fixture: ComponentFixture<ReloadlyExpandableTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReloadlyExpandableTileComponent]
    });
    fixture = TestBed.createComponent(ReloadlyExpandableTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
