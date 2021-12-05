import { TestBed } from '@angular/core/testing';

import { LogupService } from './logup.service';

describe('LogupService', () => {
  let service: LogupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
