import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaAyudantiasComponent } from './components/home/templates/tabla-ayudantias/tabla-ayudantias.component';
import { CrearAyudantiaComponent } from './components/home/templates/crear-ayudantia/crear-ayudantia.component';
import { EditarAyudantiaComponent } from './components/home/templates/editar-ayudantia/editar-ayudantia.component';
import { TablaSolicitudesComponent } from './components/home/templates/tabla-solicitudes/tabla-solicitudes.component';
import { VerSolicitudComponent } from './components/home/templates/ver-solicitud/ver-solicitud.component';
import { AyudantiasDirectorComponent } from './components/ayudantias-director/ayudantias-director.component';
import { ResultadosEstudianteComponent } from './components/resultados-estudiante/resultados-estudiante.component';

const routes: Routes = [
  { 
    path: 'director/ayudantias',
    component: AyudantiasDirectorComponent
  },
  { 
    path: 'estudiante/resultados',
    component: ResultadosEstudianteComponent
  },
  {
    path: 'ayudantias',
    component: TablaAyudantiasComponent
  },
  {
    path: 'ayudantias/crear',
    component: CrearAyudantiaComponent
  },
  {
    path: 'ayudantias/editar/:id_ayudantia',
    component: EditarAyudantiaComponent
  },
  {
    path: 'solicitudes',
    component: TablaSolicitudesComponent
  },
  {
    path: 'solicitudes/ver/:id_solicitud',
    component: VerSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
