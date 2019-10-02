import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosDocenteComponent } from './seguimientos-docente.component';

describe('SeguimientosDocenteComponent', () => {
  let component: SeguimientosDocenteComponent;
  let fixture: ComponentFixture<SeguimientosDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientosDocenteComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientosDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
