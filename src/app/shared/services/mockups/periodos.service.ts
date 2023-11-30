import { Injectable } from '@angular/core';
import { Periodo } from '../../../models/periodo.model';

const PERIODOS_KEY = 'periodos';

@Injectable({
  providedIn: 'root'
})
export class PeriodosService {
  periodos: Periodo[] = [];

  constructor() {
    const periodosGuardados = localStorage.getItem(PERIODOS_KEY);
    if (periodosGuardados) {
      this.periodos = JSON.parse(periodosGuardados);
    } else {
      this.periodos = [
        { id_periodo: 0, tipo: 0, fecha_inicio: new Date('2023-09-27'), fecha_fin: new Date('2023-10-26') },
        { id_periodo: 1, tipo: 1, fecha_inicio: new Date('2023-10-27'), fecha_fin: new Date('2023-11-26') },
        { id_periodo: 2, tipo: 2, fecha_inicio: new Date('2023-11-27'), fecha_fin: new Date('2023-12-26') },
      ];
      this.guardarEnLocalStorage();
    }
  }

  guardarEnLocalStorage() {
    localStorage.setItem(PERIODOS_KEY, JSON.stringify(this.periodos));
  }

  agregarPeriodo(periodo: Periodo) {
    this.periodos.push(periodo);
    this.guardarEnLocalStorage();
  }

  obtenerPeriodos(): Periodo[] {
    return this.periodos;
  }
}
