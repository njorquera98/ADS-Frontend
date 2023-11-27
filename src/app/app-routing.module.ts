import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaAyudantiasComponent } from './components/home/templates/tabla-ayudantias/tabla-ayudantias.component';

const routes: Routes = [
  {
    path: 'ayudantias',
    component: TablaAyudantiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
