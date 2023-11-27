import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AyudantiasDirectorComponent } from './components/ayudantias-director/ayudantias-director.component';

const routes: Routes = [
  { path: 'director/ayudantias', component: AyudantiasDirectorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
