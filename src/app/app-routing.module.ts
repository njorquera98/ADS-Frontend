import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudantiasComponent } from './components/estudiante/ayudantias/ayudantias.component';
import { SolicitudesComponent } from './components/estudiante/solicitudes/solicitudes.component';
import { ProfesorSolicitudesComponent } from './components/profesor/solicitudes/solicitudes.component';

const routes: Routes = [
  { path: '', redirectTo: 'estudiante/ayudantias', pathMatch: 'full' },
  { path: 'estudiante/ayudantias', component: AyudantiasComponent },
  { path: 'estudiante/solicitudes', component: SolicitudesComponent },
  { path: 'profesor/solicitudes', component: ProfesorSolicitudesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
