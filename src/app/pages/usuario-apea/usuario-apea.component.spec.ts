import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioApeaComponent } from './usuario-apea.component';

describe('UsuarioApeaComponent', () => {
  let component: UsuarioApeaComponent;
  let fixture: ComponentFixture<UsuarioApeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioApeaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioApeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
