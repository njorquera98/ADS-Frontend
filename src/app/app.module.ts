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
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
