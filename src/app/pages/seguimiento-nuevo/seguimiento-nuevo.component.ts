import { Component, OnInit } from '@angular/core';
import { SeguimientoEstudiantesService } from '../../@core/data/seguimiento-estudiantes.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ObservacionService } from '../../@core/data/observacion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-seguimiento-nuevo',
  templateUrl: './seguimiento-nuevo.component.html',
  styleUrls: ['./seguimiento-nuevo.component.scss']
})
export class SeguimientoNuevoComponent implements OnInit {

  createForm() {
    this.observacionForm = new FormGroup({
      obser: new FormControl('obser', Validators.required),
      nivelAlerta: new FormControl('NAlerta', Validators.required),
    });
  }

  segId: any;
  observaciones_lista: any = [] ;
  segActual: any;
  observacionSel: any;
  observacionForm: FormGroup;
  dataForm: any;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private seguimiento: SeguimientoEstudiantesService,
    private observacionService: ObservacionService) { 
      this.createForm();
      this.segId = this.route.snapshot.paramMap.get('id');
      this.observacionService.get('?query=IdSeguimiento.Id%3A'+this.segId)
      .subscribe((data: any) => {
        this.observaciones_lista = data;
      });
      this.seguimiento.get(this.segId).subscribe((data: any) => {
        this.segActual = data;
      });
      
    }

  ngOnInit() {
    
  }

  cargarObs(obs: any){
    console.log("No se que hacer haaaaaaaa");
    this.observacionSel = obs;
    this.observacionForm.setValue({obser: obs.Observacion,  nivelAlerta: 1});
    
    console.info(this.observacionForm.value);
  }

  nuevaObs(){

  }

  cambiarEstado(){
    this.segActual.cerrado = true;
    this.seguimiento.post("", this.segActual);
  }

}
