import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private baseUrl = 'http://localhost:8080/api/v1/sections';
    constructor(private http: HttpClient) { }
    getSection(id: number): Observable<any> {
       return this.http.get(`${this.baseUrl}/${id}`);
     }

     createSection(section: Object): Observable<Object> {
       return this.http.post(`${this.baseUrl}`, section);
     }

     updateSection(id: number, value: any): Observable<Object> {
       return this.http.put(`${this.baseUrl}/${id}`, value);
     }

     deleteSection(id: number): Observable<any> {
       return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
     }

     getSectionsList(): Observable<any> {
       return this.http.get(`${this.baseUrl}`);
     }

}
