import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from '../../../models/asignatura.model';
import { Ayudantia } from '../../../models/ayudantia.model';
import { AsignaturasService } from '../../../shared/services/asignaturas.service';
import { AuthService } from '../../../shared/services/auth.service';
import { AyudantiasService } from '../../../shared/services/ayudantias.service';

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
    this.asignaturasService.getAsignaturas().subscribe((data) => {
      if(data) {
        this.asignaturas = data;
        this.ayudantiasService.getAyudantiaById(+this.activatedRoute.snapshot.params['id_ayudantia']).subscribe((data) => {
          if(data) {
            console.log(data);
            this.ayudantiaEdit = data;
          }
        });
      }
    });
  }

  updateAyudantia() {
    const auxAyudantia: Ayudantia = {
      id_ayudantia: this.ayudantiaEdit!.id_ayudantia,
      id_asignatura: this.ayudantiaEdit!.id_asignatura,
      id_usuario: this.authService.cuenta_actual!.id_usuario,
      cupos: this.ayudantiaEdit!.cupos,
      horas: this.ayudantiaEdit!.horas,
      estado: this.ayudantiaEdit!.estado,
      id_periodo: this.ayudantiaEdit!.id_periodo
    }

    this.ayudantiasService.updateAyudantia(auxAyudantia).subscribe((data) => {
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
