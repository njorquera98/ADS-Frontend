import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockupService } from '../../../../shared/mockups/mockup.service';
import { Ayudantia } from '../../../../models/ayudantia.model';
import { Asignatura } from '../../../../models/asignatura.model';

@Component({
  selector: 'app-tabla-ayudantias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-ayudantias.component.html',
  styleUrl: './tabla-ayudantias.component.css'
})
export class TablaAyudantiasComponent implements OnInit {
  ayudantias: Ayudantia[] = [];
  asignaturas: Asignatura[] = [];

  constructor(private mockupService: MockupService){};

  ngOnInit(): void {
    this.ayudantias = this.mockupService.ayudantias;
    this.asignaturas = this.mockupService.asignaturas;
  }

  getAsignatura(ayudantia: Ayudantia): Asignatura | undefined {
    return this.asignaturas.find(a => a.id_asignatura === ayudantia.id_asignatura)
  }
}
