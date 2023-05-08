import { TestBed } from '@angular/core/testing';

import { ReloadlyModal } from './reloadly-modal';

describe('ReloadlyModalService', () => {
  let service: ReloadlyModal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadlyModal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
