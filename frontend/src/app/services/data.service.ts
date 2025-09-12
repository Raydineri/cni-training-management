import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/dossier/';

  create(dossier: any){
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.url + 'ajoutDossier', dossier, { headers });
  }
}
