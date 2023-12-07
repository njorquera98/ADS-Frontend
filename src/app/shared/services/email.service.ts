import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  apiUrl = 'http://localhost:3000/submit';

  constructor(private http: HttpClient) {}

  sendEmail(target: string, content: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/${target}`, { content });
  }
}
