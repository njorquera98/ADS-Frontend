import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ayudantia } from '../../models/ayudantia.model';

@Injectable({
  providedIn: 'root',
})
export class AyudantiasService {
  apiUrl = 'http://localhost:3000';
  apiVersion = 'v1';

  constructor(private http: HttpClient) {}

  getAyudantias(): Observable<Ayudantia[]> {
    return this.http.get<Ayudantia[]>(`${this.apiUrl}/${this.apiVersion}/ayudantias`);
  }

  getAyudantiaById(id: number): Observable<Ayudantia> {
    return this.http.get<Ayudantia>(`${this.apiUrl}/${this.apiVersion}/ayudantias/${id}`);
  }

  createAyudantia(ayudantia: Ayudantia): Observable<Ayudantia> {
    return this.http.post<Ayudantia>(`${this.apiUrl}/${this.apiVersion}/ayudantias`, ayudantia);
  }

  updateAyudantia(ayudantia: Ayudantia): Observable<Ayudantia> {
    return this.http.patch<Ayudantia>(`${this.apiUrl}/${this.apiVersion}/ayudantias/${ayudantia.id_ayudantia}`, ayudantia);
  }

  deleteAyudantia(id: number): Observable<Ayudantia> {
    return this.http.delete<Ayudantia>(`${this.apiUrl}/${this.apiVersion}/ayudantias/${id}`);
  }
}
