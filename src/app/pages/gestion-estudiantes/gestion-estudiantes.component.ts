import { Component, OnInit } from '@angular/core';
import { EstudiantesConsejeroService } from '../../@core/data/estudiantes-consejero.service';

@Component({
  selector: 'ngx-gestion-estudiantes',
  templateUrl: './gestion-estudiantes.component.html',
  styleUrls: ['./gestion-estudiantes.component.scss'],
})
export class GestionEstudiantesComponent implements OnInit {

  estudiantes_lista: {}[] = [] ;

  constructor(private estudiantes: EstudiantesConsejeroService) {
    // this.user_info = JSON.parse(atob(localStorage.getItem("id_token").split(".")[1]));
    this.estudiantes.get('80093200')
    .subscribe((data: any) => {
      this.estudiantes_lista = data.estudiantes;
    });
   }
  ngOnInit() {
  }

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

}
