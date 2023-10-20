import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableTileComponent } from './expandable-tile.component';

describe('ExpandableTileComponent', () => {
  let component: ExpandableTileComponent;
  let fixture: ComponentFixture<ExpandableTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandableTileComponent]
    });
    fixture = TestBed.createComponent(ExpandableTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
