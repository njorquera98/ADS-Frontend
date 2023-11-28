import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/templates/home/home.component';
import { TablaAyudantiasComponent } from './components/home/templates/tabla-ayudantias/tabla-ayudantias.component';
import { CrearAyudantiaComponent } from './components/home/templates/crear-ayudantia/crear-ayudantia.component';
import { EditarAyudantiaComponent } from './components/home/templates/editar-ayudantia/editar-ayudantia.component';
import { FormsModule } from '@angular/forms';
import { TablaSolicitudesComponent } from './components/home/templates/tabla-solicitudes/tabla-solicitudes.component';
import { CrearSolicitudComponent } from './components/home/templates/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './components/home/templates/editar-solicitud/editar-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaAyudantiasComponent,
    CrearAyudantiaComponent,
    EditarAyudantiaComponent,
    TablaSolicitudesComponent,
    CrearSolicitudComponent,
    EditarSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
