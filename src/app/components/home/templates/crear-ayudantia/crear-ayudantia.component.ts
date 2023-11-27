import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../shared/services/mockups/auth.service';
import { AsignaturasService } from '../../../../shared/services/mockups/asignaturas.service';
import { Ayudantia } from '../../../../models/ayudantia.model';
import { AyudantiasService } from '../../../../shared/services/mockups/ayudantias.service';
import { Asignatura } from '../../../../models/asignatura.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-ayudantia',
  templateUrl: './crear-ayudantia.component.html',
  styleUrl: './crear-ayudantia.component.css'
})
export class CrearAyudantiaComponent implements OnInit {
  id_asignatura: number = 0;
  cupos: number = 2;
  horas: number = 5;

  constructor(private authService: AuthService, public asignaturasService: AsignaturasService, private ayudantiasService: AyudantiasService, private router: Router){}

  ngOnInit(): void {
  }

  crearAyudantia() {
    const maxId = this.ayudantiasService.ayudantias.reduce((prev, val, id) => {
      return Math.max(val.id_ayudantia, prev)
    }, 0)
    const nuevaAyudantia: Ayudantia = {
      id_ayudantia: maxId + 1,
      id_asignatura: +this.id_asignatura,
      id_usuario: this.authService.cuenta_actual!.id_usuario,
      cupos: this.cupos,
      horas: this.horas,
      estado: "Creado",
      id_periodo: 0
    }

    this.ayudantiasService.ayudantias.push(nuevaAyudantia);
    console.log(this.authService.cuenta_actual);
    console.log(this.ayudantiasService.ayudantias);
    this.router.navigate(['ayudantias']);
  }
}
