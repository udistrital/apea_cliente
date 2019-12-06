import { Component, OnInit } from '@angular/core';
import { SeguimientoEstudiantesService } from '../../@core/data/seguimiento-estudiantes.service';

@Component({
  selector: 'ngx-seguimientos-docente',
  templateUrl: './seguimientos-docente.component.html',
  styleUrls: ['./seguimientos-docente.component.scss'],
})
export class SeguimientosDocenteComponent implements OnInit {


  seguimientos_lista: any = [];

  constructor(private seguimientoServ: SeguimientoEstudiantesService) { 
    this.seguimientoServ.get('?query=CodigoFuncionario%3A80093200&limit=100')
      .subscribe((data: any) => {
        console.log(data);
        this.seguimientos_lista = data;
      });
  }

  ngOnInit() {
  }

}
