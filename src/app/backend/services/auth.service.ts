// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.api}/signin`, data);
  }

  register(data: { name: string; email: string; password: string; role: string }): Observable<any> {
    return this.http.post(`${this.api}/signup`, data);
  }
  signup(data: any) {
    return this.http.post('http://localhost:3000/api/auth/signup', data);
  }

}
