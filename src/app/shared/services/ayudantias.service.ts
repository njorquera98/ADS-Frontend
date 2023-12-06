import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AyudantiasServices {
  private API_SERVER = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getAyudantias() {
    return this.http.get(this.API_SERVER + '/ayudantias');
  }
}
