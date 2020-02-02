import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{	Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/registration';
  private loginUrl='http://localhost:8080/login';

    private Url='http://localhost:8080/getuser';

  constructor(private http: HttpClient) {
  this.http=http;}


   saveUser(user: Object): Observable<Object>  {
     return this.http.post(`${this.baseUrl}`, user);
   }

   loginUser(user: any): Observable<any>  {
     const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});

     return this.http.post(`${this.loginUrl}`, user,{headers: headers});
   }





   getUser(token: any): Observable<any>  {
     const headers = new HttpHeaders({'Authorization': 'Bearer'+ token});

     return this.http.get(`${this.Url}`,{headers: headers});
   }




}
