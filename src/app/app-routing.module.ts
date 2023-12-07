import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaAyudantiasComponent } from './components/profesor/tabla-ayudantias/tabla-ayudantias.component';
import { CrearAyudantiaComponent } from './components/profesor/crear-ayudantia/crear-ayudantia.component';
import { EditarAyudantiaComponent } from './components/profesor/editar-ayudantia/editar-ayudantia.component';
import { TablaSolicitudesComponent } from './components/profesor/tabla-solicitudes/tabla-solicitudes.component';
import { VerSolicitudComponent } from './components/profesor/ver-solicitud/ver-solicitud.component';
import { AyudantiasDirectorComponent } from './components/director/ayudantias-director/ayudantias-director.component';
import { ResultadosEstudianteComponent } from './components/estudiante/resultados-estudiante/resultados-estudiante.component';
import { AyudantiasComponent } from './components/estudiante/ayudantias/ayudantias.component';
import { SolicitudesComponent } from './components/estudiante/solicitudes/solicitudes.component';
//import { ProfesorSolicitudesComponent } from './components/profesor/solicitudes/solicitudes.component';
import { PostularComponent } from './components/estudiante/postular/postular.component';

const routes: Routes = [
  { path: '', redirectTo: 'profesor/ayudantias', pathMatch: 'full' },
  {
    path: 'estudiante',
    children: [
      { path: 'ayudantias', component: AyudantiasComponent },
      { path: 'postular/:id_ayudantia', component: PostularComponent },
      { path: 'solicitudes', component: SolicitudesComponent },
      { path: 'resultados', component: ResultadosEstudianteComponent },
    ],
  },
  {
    path: 'profesor',
    children: [
      { path: 'solicitudes', component: TablaSolicitudesComponent },
      { path: 'ayudantias', component: TablaAyudantiasComponent },
      { path: 'ayudantias/crear', component: CrearAyudantiaComponent },
      {
        path: 'ayudantias/editar/:id_ayudantia',
        component: EditarAyudantiaComponent,
      },
      {
        path: 'solicitudes/ver/:id_solicitud',
        component: VerSolicitudComponent,
      },
    ],
  },
  {
    path: 'director',
    children: [
      { path: 'ayudantias', component: AyudantiasDirectorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
