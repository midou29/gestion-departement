import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttributionService {
  private baseUrl = 'http://localhost:8080/api/v1/attributions';
    constructor(private http: HttpClient) { }
    getAttribution(id: number): Observable<any> {
       return this.http.get(`${this.baseUrl}/${id}`);
     }

     createAttribution(attribution: Object): Observable<Object> {
       return this.http.post(`${this.baseUrl}`, attribution);
     }

     updateAttribution(id: number, value: any): Observable<Object> {
       return this.http.put(`${this.baseUrl}/${id}`, value);
     }

     deleteAttribution(id: number): Observable<any> {
       return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
     }

     getAttributionsList(): Observable<any> {
       return this.http.get(`${this.baseUrl}`);
     }
}
