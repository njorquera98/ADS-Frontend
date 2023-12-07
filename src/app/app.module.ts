import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/templates/home/home.component';
import { AyudantiasDirectorComponent } from './components/director/ayudantias-director/ayudantias-director.component';
import { ResultadosEstudianteComponent } from './components/estudiante/resultados-estudiante/resultados-estudiante.component';
import { TablaAyudantiasComponent } from './components/profesor/tabla-ayudantias/tabla-ayudantias.component';
import { CrearAyudantiaComponent } from './components/profesor/crear-ayudantia/crear-ayudantia.component';
import { EditarAyudantiaComponent } from './components/profesor/editar-ayudantia/editar-ayudantia.component';
import { TablaSolicitudesComponent } from './components/profesor/tabla-solicitudes/tabla-solicitudes.component';
import { VerSolicitudComponent } from './components/profesor/ver-solicitud/ver-solicitud.component';
import { AyudantiasComponent } from './components/estudiante/ayudantias/ayudantias.component';
import { SolicitudesComponent } from './components/estudiante/solicitudes/solicitudes.component';
import { EstudianteModalComponent } from './components/estudiante/modal/modal.component';
import { PostularComponent } from './components/estudiante/postular/postular.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AyudantiasComponent,
    SolicitudesComponent,
    EstudianteModalComponent,
    PostularComponent,
    AyudantiasDirectorComponent,
    ResultadosEstudianteComponent,
    TablaAyudantiasComponent,
    CrearAyudantiaComponent,
    EditarAyudantiaComponent,
    TablaSolicitudesComponent,
    VerSolicitudComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
