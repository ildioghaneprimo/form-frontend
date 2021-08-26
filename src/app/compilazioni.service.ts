import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompilazioniService {
  datiTemporanei: any = {};
  url: string = '/richieste';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.apiUrl}${this.url}`);
  }

  addSubmission(submission: any) {
    return this.http.post(`${environment.apiUrl}${this.url}`, submission);
  }

  removeSubmission(id: string) {
    return this.http.delete(`${environment.apiUrl}${this.url}/remove/${id}`);
  }
}
