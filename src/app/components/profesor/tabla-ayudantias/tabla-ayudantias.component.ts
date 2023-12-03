import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ayudantia } from '../../../models/ayudantia.model';
import { Asignatura } from '../../../models/asignatura.model';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { AppRoutingModule } from '../../../app-routing.module';
import { AuthService } from '../../../shared/services/mockups/auth.service';

@Component({
  selector: 'app-tabla-ayudantias',
  templateUrl: './tabla-ayudantias.component.html',
  styleUrl: './tabla-ayudantias.component.css',
})
export class TablaAyudantiasComponent implements OnInit {
  constructor(
    public ayudantiasService: AyudantiasService,
    private asignaturasService: AsignaturasService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  getAsignatura(ayudantia: Ayudantia): Asignatura | undefined {
    return this.asignaturasService.asignaturas.find(
      (a) => a.id_asignatura === ayudantia.id_asignatura
    );
  }

  createAyudantia() {}

  eliminarAyudantia(ayudantia: Ayudantia) {
    const index = this.ayudantiasService.ayudantias.findIndex(
      (val) => val.id_ayudantia === ayudantia.id_ayudantia
    )!;
    this.ayudantiasService.ayudantias.splice(index, 1);
    this.ayudantiasService.guardarEnLocalStorage();
  }
}
