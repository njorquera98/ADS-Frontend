import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/mockups/auth.service';
import { AsignaturasService } from '../../../shared/services/mockups/asignaturas.service';
import { AyudantiasService } from '../../../shared/services/mockups/ayudantias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ayudantia } from '../../../models/ayudantia.model';
import { Asignatura } from '../../../models/asignatura.model';

@Component({
  selector: 'app-editar-ayudantia',
  templateUrl: './editar-ayudantia.component.html',
  styleUrl: './editar-ayudantia.component.css',
})
export class EditarAyudantiaComponent implements OnInit {
  ayudantiaEdit?: Ayudantia;

  constructor(
    private authService: AuthService,
    public asignaturasService: AsignaturasService,
    private ayudantiasService: AyudantiasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ayudantiaEdit = this.ayudantiasService.ayudantias.find(
      (val) =>
        val.id_ayudantia ===
        +this.activatedRoute.snapshot.params['id_ayudantia']
    );
    console.log(this.ayudantiaEdit);
    console.log(this.ayudantiasService.ayudantias);
  }

  actualizarAyudantia() {
    const maxId = this.ayudantiasService.ayudantias.reduce((prev, val, id) => {
      return Math.max(val.id_ayudantia, prev);
    }, 0);
    const nuevaAyudantia: Ayudantia = {
      id_ayudantia: maxId + 1,
      id_asignatura: this.ayudantiaEdit!.id_asignatura,
      id_usuario: this.authService.cuenta_actual!.id_usuario,
      cupos: this.ayudantiaEdit!.cupos,
      horas: this.ayudantiaEdit!.horas,
      estado: 'Creado',
      id_periodo: 0,
    };

    const id_edit = this.ayudantiasService.ayudantias.findIndex(
      (val) => val.id_ayudantia === this.ayudantiaEdit?.id_ayudantia
    );
    this.ayudantiasService.ayudantias[id_edit] = this.ayudantiaEdit!;
    this.ayudantiasService.guardarEnLocalStorage();
    console.log(this.ayudantiasService.ayudantias);
    this.router.navigate(['ayudantias']);
  }

  getAsignatura(ayudantia: Ayudantia): Asignatura | undefined {
    return this.asignaturasService.asignaturas.find(
      (a) => a.id_asignatura === ayudantia.id_asignatura
    );
  }

  cancelar() {
    this.router.navigate(['ayudantias']);
  }
}
