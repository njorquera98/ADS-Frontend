import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ayudantia } from '../../../models/ayudantia.model';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { AuthService } from '../../../shared/services/mockups/auth.service';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';
import { Asignatura } from '../../../models/asignatura.model';


@Component({
  selector: 'app-crear-ayudantia',
  templateUrl: './crear-ayudantia.component.html',
  styleUrl: './crear-ayudantia.component.css'
})
export class CrearAyudantiaComponent implements OnInit {
  id_asignatura: number = 0;
  cupos: number = 2;
  horas: number = 5;
  asignaturas: Asignatura[] = [];

  constructor(private authService: AuthService, public asignaturasService: AsignaturasService, private ayudantiasService: AyudantiasService, private router: Router){}

  ngOnInit(): void {
    this.asignaturasService.obtenerAsignaturas().subscribe((data) => {
      if(data){
        this.asignaturas = data;
      }
    });
  }

  crearAyudantia() {
    const nuevaAyudantia: Ayudantia = {
      id_ayudantia: -1,
      id_asignatura: this.id_asignatura,
      id_usuario: this.authService.cuenta_actual!.id_usuario,
      cupos: this.cupos,
      horas: this.horas,
      estado: "Creado",
      id_periodo: 1,
    }

    this.ayudantiasService.agregarAyudantia(nuevaAyudantia).subscribe((data) => {
      if(data){
        console.log("Ayudantia creada");
        this.router.navigate(['profesor/ayudantias']);
      }
    });
  }

  cancelar() {
    this.router.navigate(['profesor/ayudantias']);
  }
}
