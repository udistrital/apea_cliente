import { Component, OnInit } from '@angular/core';
import { EstudiantesConsejeroService } from '../../@core/data/estudiantes-consejero.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
    });
  }
  estudiantes_lista: any = [] ;
  estudianteSeleccionado: any;
  dataForm: any;
  estudianteForm: FormGroup;

  constructor(private estudiantes: EstudiantesConsejeroService, private fb: FormBuilder) {
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
    const {nombre, codigo} = estudiante;
    this.estudianteSeleccionado = estudiante;
    this.estudianteForm.setValue({nombre: nombre, codigo: codigo});
    console.info(this.estudianteForm.value);
  }

  onClickSubmit(email, password) {
    alert('Your Email is : ' + email);
  }


  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

}
