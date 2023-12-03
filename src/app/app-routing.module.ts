import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudantiasComponent } from './components/estudiante/ayudantias/ayudantias.component';
import { SolicitudesComponent } from './components/estudiante/solicitudes/solicitudes.component';
import { ProfesorSolicitudesComponent } from './components/profesor/solicitudes/solicitudes.component';
import { PostularComponent } from './components/estudiante/postular/postular.component';
import { TablaAyudantiasComponent } from './components/home/templates/tabla-ayudantias/tabla-ayudantias.component';
import { CrearAyudantiaComponent } from './components/home/templates/crear-ayudantia/crear-ayudantia.component';
import { EditarAyudantiaComponent } from './components/home/templates/editar-ayudantia/editar-ayudantia.component';
import { TablaSolicitudesComponent } from './components/home/templates/tabla-solicitudes/tabla-solicitudes.component';
import { VerSolicitudComponent } from './components/home/templates/ver-solicitud/ver-solicitud.component';

const routes: Routes = [
  { path: '', redirectTo: 'estudiante/ayudantias', pathMatch: 'full' },
  { path: 'estudiante/ayudantias', component: AyudantiasComponent },
  { path: 'estudiante/postular/:id_ayudantia', component: PostularComponent },
  { path: 'estudiante/solicitudes', component: SolicitudesComponent },
  { path: 'profesor/solicitudes', component: ProfesorSolicitudesComponent },
  {
    path: 'ayudantias',
    component: TablaAyudantiasComponent,
  },
  {
    path: 'ayudantias/crear',
    component: CrearAyudantiaComponent,
  },
  {
    path: 'ayudantias/editar/:id_ayudantia',
    component: EditarAyudantiaComponent,
  },
  {
    path: 'solicitudes',
    component: TablaSolicitudesComponent,
  },
  {
    path: 'solicitudes/ver/:id_solicitud',
    component: VerSolicitudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
