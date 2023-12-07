import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Periodo } from '../../models/periodo.model';

@Injectable({
  providedIn: 'root',
})
export class PeriodosService {
  apiUrl = 'http://localhost:3000';
  apiVersion = 'v1';

  constructor(private http: HttpClient) {}

  getPeriodos(): Observable<Periodo[]> {
    return this.http.get<Periodo[]>(`${this.apiUrl}/${this.apiVersion}/periodos`);
  }

  getPeriodoById(id: number): Observable<Periodo> {
    return this.http.get<Periodo>(`${this.apiUrl}/${this.apiVersion}/periodos/${id}`);
  }

  createPeriodo(periodo: Periodo): Observable<Periodo> {
    return this.http.post<Periodo>(`${this.apiUrl}/${this.apiVersion}/periodos`, periodo);
  }

  updatePeriodo(periodo: Periodo): Observable<Periodo> {
    return this.http.patch<Periodo>(`${this.apiUrl}/${this.apiVersion}/periodos/${periodo.id_periodo}`, periodo);
  }

  deletePeriodo(id: number): Observable<Periodo> {
    return this.http.delete<Periodo>(`${this.apiUrl}/${this.apiVersion}/periodos/${id}`);
  }
}
