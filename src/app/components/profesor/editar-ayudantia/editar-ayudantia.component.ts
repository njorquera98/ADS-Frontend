import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from '../../../models/asignatura.model';
import { Ayudantia } from '../../../models/ayudantia.model';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { AuthService } from '../../../shared/services/mockups/auth.service';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';

@Component({
  selector: 'app-editar-ayudantia',
  templateUrl: './editar-ayudantia.component.html',
  styleUrl: './editar-ayudantia.component.css'
})
export class EditarAyudantiaComponent implements OnInit{
  ayudantiaEdit?: Ayudantia;
  asignaturas: Asignatura[] = [];

  constructor(private authService: AuthService, public asignaturasService: AsignaturasService, private ayudantiasService: AyudantiasService, 
    private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.asignaturasService.obtenerAsignaturas().subscribe((data) => {
      if(data) {
        this.asignaturas = data;
        this.ayudantiasService.obtenerAyudantiaPorId(+this.activatedRoute.snapshot.params['id_ayudantia']).subscribe((data) => {
          if(data) {
            console.log(data);
            this.ayudantiaEdit = data;
          }
        });
      }
    });
  }

  actualizarAyudantia() {
    const auxAyudantia: Ayudantia = {
      id_ayudantia: this.ayudantiaEdit!.id_ayudantia,
      id_asignatura: this.ayudantiaEdit!.id_asignatura,
      id_usuario: this.authService.cuenta_actual!.id_usuario,
      cupos: this.ayudantiaEdit!.cupos,
      horas: this.ayudantiaEdit!.horas,
      estado: this.ayudantiaEdit!.estado,
      id_periodo: this.ayudantiaEdit!.id_periodo
    }

    this.ayudantiasService.actualizarAyudantia(auxAyudantia).subscribe((data) => {
      if(data) {
        console.log("ayudantia actualizada");
        this.router.navigate(['profesor/ayudantias']);
      }
    });
  }

  getAsignatura(ayudantia: Ayudantia): Asignatura | undefined {
    return this.asignaturas.find(a => a.id_asignatura === ayudantia.id_asignatura)
  }

  cancelar() {
    this.router.navigate(['profesor/ayudantias']);
  }

}
