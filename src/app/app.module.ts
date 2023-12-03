import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/templates/home/home.component';
import { AyudantiasComponent } from './components/estudiante/ayudantias/ayudantias.component';
import { SolicitudesComponent } from './components/estudiante/solicitudes/solicitudes.component';
import { ProfesorSolicitudesComponent } from './components/profesor/solicitudes/solicitudes.component';
import { ProfesorModalComponent } from './components/profesor/modal/modal.component';
import { EstudianteModalComponent } from './components/estudiante/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { PostularComponent } from './components/estudiante/postular/postular.component';
import { TablaAyudantiasComponent } from './components/home/templates/tabla-ayudantias/tabla-ayudantias.component';
import { CrearAyudantiaComponent } from './components/home/templates/crear-ayudantia/crear-ayudantia.component';
import { EditarAyudantiaComponent } from './components/home/templates/editar-ayudantia/editar-ayudantia.component';
import { TablaSolicitudesComponent } from './components/home/templates/tabla-solicitudes/tabla-solicitudes.component';
import { VerSolicitudComponent } from './components/home/templates/ver-solicitud/ver-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AyudantiasComponent,
    SolicitudesComponent,
    ProfesorSolicitudesComponent,
    ProfesorModalComponent,
    EstudianteModalComponent,
    PostularComponent,
    TablaAyudantiasComponent,
    CrearAyudantiaComponent,
    EditarAyudantiaComponent,
    TablaSolicitudesComponent,
    VerSolicitudComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
