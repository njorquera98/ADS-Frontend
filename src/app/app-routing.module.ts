import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaAyudantiasComponent } from './components/home/templates/tabla-ayudantias/tabla-ayudantias.component';
import { CrearAyudantiaComponent } from './components/home/templates/crear-ayudantia/crear-ayudantia.component';
import { EditarAyudantiaComponent } from './components/home/templates/editar-ayudantia/editar-ayudantia.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
