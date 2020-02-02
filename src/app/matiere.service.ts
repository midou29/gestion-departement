import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  private baseUrl = 'http://localhost:8080/api/v1/matieres';
    constructor(private http: HttpClient) { }
    getMatiere(id: number): Observable<any> {
       return this.http.get(`${this.baseUrl}/${id}`);
     }

     createMatiere(matiere: Object): Observable<Object> {
       return this.http.post(`${this.baseUrl}`, matiere);
     }

     updateMatiere(id: number, value: any): Observable<Object> {
       return this.http.put(`${this.baseUrl}/${id}`, value);
     }

     deleteMatiere(id: number): Observable<any> {
       return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
     }

     getMatieresList(): Observable<any> {
       return this.http.get(`${this.baseUrl}`);
     }



}
