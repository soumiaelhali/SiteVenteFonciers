import { TestBed } from '@angular/core/testing';

import { AnnonceService } from './annonce.service';

describe('AnnonceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnonceService = TestBed.get(AnnonceService);
    expect(service).toBeTruthy();
  });
});
