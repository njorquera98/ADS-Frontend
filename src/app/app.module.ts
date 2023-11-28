import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/templates/home/home.component';
import { AyudantiasDirectorComponent } from './components/ayudantias-director/ayudantias-director.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultadosEstudianteComponent } from './components/resultados-estudiante/resultados-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AyudantiasDirectorComponent,
    ResultadosEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
