import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/templates/home/home.component';
import { AyudantiasDirectorComponent } from './components/ayudantias-director/ayudantias-director.component';
import { ResultadosEstudianteComponent } from './components/resultados-estudiante/resultados-estudiante.component';
import { TablaAyudantiasComponent } from './components/home/templates/tabla-ayudantias/tabla-ayudantias.component';
import { CrearAyudantiaComponent } from './components/home/templates/crear-ayudantia/crear-ayudantia.component';
import { EditarAyudantiaComponent } from './components/home/templates/editar-ayudantia/editar-ayudantia.component';
import { TablaSolicitudesComponent } from './components/home/templates/tabla-solicitudes/tabla-solicitudes.component';
import { VerSolicitudComponent } from './components/home/templates/ver-solicitud/ver-solicitud.component';
import { AyudantiasComponent } from './components/estudiante/ayudantias/ayudantias.component';
import { SolicitudesComponent } from './components/estudiante/solicitudes/solicitudes.component';
import { ProfesorSolicitudesComponent } from './components/profesor/solicitudes/solicitudes.component';
import { ProfesorModalComponent } from './components/profesor/modal/modal.component';
import { EstudianteModalComponent } from './components/estudiante/modal/modal.component';
import { PostularComponent } from './components/estudiante/postular/postular.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
