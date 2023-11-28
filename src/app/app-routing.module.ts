import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AyudantiasDirectorComponent } from './components/ayudantias-director/ayudantias-director.component';
import { ResultadosEstudianteComponent } from './components/resultados-estudiante/resultados-estudiante.component';

const routes: Routes = [
  { path: 'director/ayudantias', component: AyudantiasDirectorComponent },
  { path: 'estudiante/resultados', component: ResultadosEstudianteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
