import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ConfiguracionService } from '../@core/data/configuracion.service';
import { MenuService } from '../@core/data/menu.service';
import { SharedModule } from '../shared/shared.module';
import { NbIconModule } from '@nebular/theme';
import { UsuarioApeaComponent } from './usuario-apea/usuario-apea.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { GestionEstudiantesComponent } from './gestion-estudiantes/gestion-estudiantes.component';
import { SeguimientosDocenteComponent } from './seguimientos-docente/seguimientos-docente.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule,
    DashboardModule,
    SharedModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
  ],
  declarations: [
    PagesComponent,
    UsuarioApeaComponent,
    BienvenidaComponent,
    GestionEstudiantesComponent,
    SeguimientosDocenteComponent,
    TutorialesComponent,
  ],
  providers: [
    ConfiguracionService,
    MenuService,
  ],
})
export class PagesModule {
}
