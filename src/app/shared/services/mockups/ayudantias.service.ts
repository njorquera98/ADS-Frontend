import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ayudantia } from '../../../models/ayudantia.model';

@Injectable({
  providedIn: 'root'
})
export class AyudantiasService {
  apiUrl = 'http://localhost:3000';
  apiVersion = 'v1';

  constructor(private http: HttpClient) {}

  obtenerAyudantias(): Observable<Ayudantia[]> {
    return this.http.get<Ayudantia[]>(`${this.apiUrl}/${this.apiVersion}/ayudantias`);
  }

  obtenerAyudantiaPorId(id: number): Observable<Ayudantia> {
    return this.http.get<Ayudantia>(`${this.apiUrl}/${this.apiVersion}/ayudantias/${id}`);
  }

  agregarAyudantia(ayudantia: Ayudantia): Observable<Ayudantia> {
    return this.http.post<Ayudantia>(`${this.apiUrl}/${this.apiVersion}/ayudantias`, ayudantia);
  }

  actualizarAyudantia(ayudantia: Ayudantia): Observable<Ayudantia> {
    return this.http.patch<Ayudantia>(`${this.apiUrl}/${this.apiVersion}/ayudantias/${ayudantia.id_ayudantia}`, ayudantia);
  }

  eliminarAyudantia(id: number): Observable<Ayudantia> {
    return this.http.delete<Ayudantia>(`${this.apiUrl}/${this.apiVersion}/ayudantias/${id}`);
  }
}
