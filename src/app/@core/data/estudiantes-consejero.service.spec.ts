import { TestBed } from '@angular/core/testing';

import { EstudiantesConsejeroService } from './estudiantes-consejero.service';

describe('EstudiantesConsejeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstudiantesConsejeroService = TestBed.get(EstudiantesConsejeroService);
    expect(service).toBeTruthy();
  });
});
