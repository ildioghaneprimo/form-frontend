import { TestBed } from '@angular/core/testing';

import { CompilazioniService } from './compilazioni.service';

describe('CompilazioniService', () => {
  let service: CompilazioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompilazioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
