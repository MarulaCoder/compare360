import { TestBed } from '@angular/core/testing';

import { MlkapiService } from './mlkapi.service';

describe('MlkapiService', () => {
  let service: MlkapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlkapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
