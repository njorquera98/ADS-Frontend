import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ayudantia } from '../../../../models/ayudantia.model';
import { Asignatura } from '../../../../models/asignatura.model';
import { AyudantiasService } from '../../../../shared/services/mockups/ayudantias.service';
import { AsignaturasService } from '../../../../shared/services/mockups/asignaturas.service';
import { AppRoutingModule } from '../../../../app-routing.module';
import { AuthService } from '../../../../shared/services/mockups/auth.service';

@Component({
  selector: 'app-tabla-ayudantias',
  templateUrl: './tabla-ayudantias.component.html',
  styleUrl: './tabla-ayudantias.component.css'
})
export class TablaAyudantiasComponent implements OnInit {
  ayudantias: Ayudantia[] = [];
  asignaturas: Asignatura[] = [];

  constructor(public ayudantiasService: AyudantiasService, private asignaturasService: AsignaturasService, public authService: AuthService){};

  ngOnInit(): void {
    this.ayudantias = this.ayudantiasService.ayudantias;
    this.asignaturas = this.asignaturasService.asignaturas;
  }

  getAsignatura(ayudantia: Ayudantia): Asignatura | undefined {
    return this.asignaturas.find(a => a.id_asignatura === ayudantia.id_asignatura)
  }

  createAyudantia() {
    
  }
}
