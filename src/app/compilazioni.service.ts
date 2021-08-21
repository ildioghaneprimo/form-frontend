import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompilazioniService {

  datiTemporanei: any = {};
  url: string= "http://localhost:3000/richieste"

  constructor(private http: HttpClient) { }

  addSubmission(submission: any){
    return this.http.post(this.url, submission);
  }
}
