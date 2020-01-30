import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../@core/data/user-info';

@Component({
  selector: 'ngx-usuario-apea',
  templateUrl: './usuario-apea.component.html',
  styleUrls: ['./usuario-apea.component.scss'],
})
export class UsuarioApeaComponent implements OnInit {
  user_info = {};

  constructor(private user: UserInfoService) {
    // this.user_info = JSON.parse(atob(localStorage.getItem("id_token").split(".")[1]));
    this.user.get('informacion_proveedor/?query=NumDocumento:80093200')
    .subscribe((data: any) => {
      this.user_info = data;
      console.log(this.user_info);
    });
   }
  ngOnInit() {
  }

}
