import { Component, OnInit } from '@angular/core';
import { EstudiantesConsejeroService } from '../../@core/data/estudiantes-consejero.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SeguimientoEstudiantesService } from '../../@core/data/seguimiento-estudiantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-gestion-estudiantes',
  templateUrl: './gestion-estudiantes.component.html',
  styleUrls: ['./gestion-estudiantes.component.scss'],
})
export class GestionEstudiantesComponent implements OnInit {
  createForm() {
    this.estudianteForm = new FormGroup({
      codigo: new FormControl('Código', Validators.required),
      nombre: new FormControl('Nombre', Validators.required),
      tipo_contacto: new FormControl('Tipo Contacto', Validators.required),
      motivo: new FormControl('Motivo', Validators.required),
    });
  }
  estudiantes_lista: any = [] ;
  estudianteSeleccionado: any;
  dataForm: any;
  estudianteForm: FormGroup;

  constructor(private estudiantes: EstudiantesConsejeroService,
     private seguimiento: SeguimientoEstudiantesService, 
     private fb: FormBuilder,
     private router: Router) {
    this.createForm();
    this.estudianteForm.valueChanges
    .subscribe((data) => {
      this.dataForm = data;
    });
    // this.user_info = JSON.parse(atob(localStorage.getItem("id_token").split(".")[1]));
    this.estudiantes.get('80093200')
    .subscribe((data: any) => {
      // debugger;
      this.estudiantes_lista = data.estudiantes.estudiante;
    });
   }
  ngOnInit() {
  }

  cargarEstudiante( estudiante: any) {
    const {nombre, codigo, tipo_contacto = "Acompañamiento Clase", motivo = "1"} = estudiante;
    this.estudianteSeleccionado = estudiante;
    this.estudianteForm.setValue({nombre: nombre,  codigo: codigo, tipo_contacto: tipo_contacto, motivo: motivo});
    console.info(this.estudianteForm.value);
  }

  onClickSubmit() {

    const formu = this.estudianteForm.getRawValue();
    console.table(formu);    
    const model = {
      "Cerrado": false,
      "CodigoEstudiante": {
        "Id": parseInt(formu.codigo),
      },
      "CodigoFuncionario": 80093200,
      "Id": 0,
      "Motivo": parseInt(formu.motivo),
      "TipoContacto": formu.tipo_contacto,
    };

    console.log(model);
    this.seguimiento.post('',model)
    .subscribe((response: any) => {
      if(response.toString().startsWith("pq")){
        //don't go to anywhere
      }else{
        this.router.navigate(['/pages/seguimientoNuevo/'+response.Id]);
      }
    })
  }


  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

}
