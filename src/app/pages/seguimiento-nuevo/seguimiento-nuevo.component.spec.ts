import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoNuevoComponent } from './seguimiento-nuevo.component';

describe('SeguimientoNuevoComponent', () => {
  let component: SeguimientoNuevoComponent;
  let fixture: ComponentFixture<SeguimientoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
