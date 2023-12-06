import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerSolicitudComponent } from './components/profesor/ver-solicitud/ver-solicitud.component';
import { CrearAyudantiaComponent } from './components/profesor/crear-ayudantia/crear-ayudantia.component';
import { EditarAyudantiaComponent } from './components/profesor/editar-ayudantia/editar-ayudantia.component';
import { TablaAyudantiasComponent } from './components/profesor/tabla-ayudantias/tabla-ayudantias.component';
import { TablaSolicitudesComponent } from './components/profesor/tabla-solicitudes/tabla-solicitudes.component';

const routes: Routes = [
  {
    path: 'profesor/ayudantias',
    component: TablaAyudantiasComponent
  },
  {
    path: 'profesor/ayudantias/crear',
    component: CrearAyudantiaComponent
  },
  {
    path: 'profesor/ayudantias/editar/:id_ayudantia',
    component: EditarAyudantiaComponent
  },
  {
    path: 'profesor/solicitudes',
    component: TablaSolicitudesComponent
  },
  {
    path: 'profesor/solicitudes/ver/:id_solicitud',
    component: VerSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
