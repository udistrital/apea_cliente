import { Component, OnInit } from '@angular/core';
import { SeguimientoEstudiantesService } from '../../@core/data/seguimiento-estudiantes.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ObservacionService } from '../../@core/data/observacion.service';

@Component({
  selector: 'ngx-seguimiento-nuevo',
  templateUrl: './seguimiento-nuevo.component.html',
  styleUrls: ['./seguimiento-nuevo.component.scss']
})
export class SeguimientoNuevoComponent implements OnInit {

  segId: any;
  observaciones_lista: any = [] ;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private seguimiento: SeguimientoEstudiantesService,
    private observacionService: ObservacionService) { 
      this.segId = this.route.snapshot.paramMap.get('id');
      this.observacionService.get('?query=IdSeguimiento.Id%3A'+this.segId)
      .subscribe((data: any) => {
        console.log(data);
        this.observaciones_lista = data;
      });
      
    }

  ngOnInit() {
    
  }

}
