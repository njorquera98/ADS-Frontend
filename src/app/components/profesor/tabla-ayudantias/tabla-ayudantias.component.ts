import { Component, OnInit } from '@angular/core';
import { AyudantiasService } from '../../../shared/services/ayudantias.service';
import { AsignaturasService } from '../../../shared/services/asignaturas.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Ayudantia } from '../../../models/ayudantia.model';
import { Asignatura } from '../../../models/asignatura.model';


@Component({
  selector: 'app-tabla-ayudantias',
  templateUrl: './tabla-ayudantias.component.html',
  styleUrl: './tabla-ayudantias.component.css'
})
export class TablaAyudantiasComponent implements OnInit {

  asignaturas: Asignatura[] = [];
  ayudantias: Ayudantia[] = [];

  constructor(public ayudantiasService: AyudantiasService, private asignaturasService: AsignaturasService, public authService: AuthService){};

  ngOnInit(): void {
    this.asignaturasService.getAsignaturas().subscribe((data) => {
      if(data) {
        this.asignaturas = data;
      }
    });
    this.ayudantiasService.getAyudantias().subscribe((data) => {
      if(data) {
        this.ayudantias = data;
      }
    });
  }

  getAsignatura(ayudantia: Ayudantia): Asignatura | undefined {
    return this.asignaturas.find(a => a.id_asignatura === ayudantia.id_asignatura)
  }

  createAyudantia() {
  }

  deleteAyudantia(ayudantia: Ayudantia) {
    const index = this.ayudantias.findIndex(val => val.id_ayudantia === ayudantia.id_ayudantia)!;
    this.ayudantias.splice(index, 1);
    this.ayudantiasService.deleteAyudantia(ayudantia.id_ayudantia!).subscribe((data) => {
      if(data) {
        console.log("Ayudantia eliminada");
      }
    });
  }
}
