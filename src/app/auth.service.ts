import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: String = '/login';

  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post(`${environment.apiUrl}${this.url}`, user);
  }
}
