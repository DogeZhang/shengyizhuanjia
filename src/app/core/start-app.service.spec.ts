import { TestBed } from '@angular/core/testing';

import { StartAppService } from './start-app.service';

describe('StartAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartAppService = TestBed.get(StartAppService);
    expect(service).toBeTruthy();
  });
});
