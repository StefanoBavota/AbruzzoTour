import { TestBed } from '@angular/core/testing';

import { PercorsoService } from './percorso.service';

describe('PercorsoService', () => {
  let service: PercorsoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PercorsoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
