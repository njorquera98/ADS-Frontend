import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/templates/home/home.component';
import { TablaAyudantiasComponent } from './components/home/templates/tabla-ayudantias/tabla-ayudantias.component';
import { CrearAyudantiaComponent } from './components/home/templates/crear-ayudantia/crear-ayudantia.component';
import { EditarAyudantiaComponent } from './components/home/templates/editar-ayudantia/editar-ayudantia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaAyudantiasComponent,
    CrearAyudantiaComponent,
    EditarAyudantiaComponent
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
