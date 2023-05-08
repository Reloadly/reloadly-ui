import { TestBed } from '@angular/core/testing';

import { ReloadlyUiService } from './reloadly-ui.service';

describe('ReloadlyUiService', () => {
  let service: ReloadlyUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadlyUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
