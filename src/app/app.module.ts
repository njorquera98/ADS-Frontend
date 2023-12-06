import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/templates/home/home.component';
import { FormsModule } from '@angular/forms';
import { VerSolicitudComponent } from './components/profesor/ver-solicitud/ver-solicitud.component';
import { TablaAyudantiasComponent } from './components/profesor/tabla-ayudantias/tabla-ayudantias.component';
import { CrearAyudantiaComponent } from './components/profesor/crear-ayudantia/crear-ayudantia.component';
import { EditarAyudantiaComponent } from './components/profesor/editar-ayudantia/editar-ayudantia.component';
import { TablaSolicitudesComponent } from './components/profesor/tabla-solicitudes/tabla-solicitudes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaAyudantiasComponent,
    CrearAyudantiaComponent,
    EditarAyudantiaComponent,
    TablaSolicitudesComponent,
    VerSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
