import { Component, OnInit } from '@angular/core';
import { SeguimientoEstudiantesService } from '../../@core/data/seguimiento-estudiantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-seguimientos-docente',
  templateUrl: './seguimientos-docente.component.html',
  styleUrls: ['./seguimientos-docente.component.scss'],
})
export class SeguimientosDocenteComponent implements OnInit {


  seguimientos_lista: any = [];

  constructor(private seguimientoServ: SeguimientoEstudiantesService, private router: Router) { 
    this.seguimientoServ.get('?query=CodigoFuncionario%3A80093200&limit=100')
      .subscribe((data: any) => {
        this.seguimientos_lista = data;
      });
  }

  ngOnInit() {
  }

  cargarSeguimiento( seguimiento: any) {
    this.router.navigate(['/pages/seguimientoNuevo/'+seguimiento.Id]);
  }

}
