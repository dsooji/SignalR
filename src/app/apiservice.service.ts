import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Email, Register } from './register';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
  
})
export class ApiserviceService {
  public apiUrl = 'https://localhost:44315/';
   public loginUrl='https://localhost:7116/';
  // public photoUrl = "https://localhost:7116/";
  public emailUrl='https://localhost:44315/'
  static baseUrl: string;

  constructor(private http:HttpClient) { }
  
  

  createuser(register: any){
    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<Register[]>(this.loginUrl+ 'api/LoginModels', register, httpOptions)
  }


  getRegisterUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.loginUrl + 'api/LoginModels'); 
  }



  //Email


  getEmail():Observable<Email[]>{
    return this.http.get<Email[]>(this.emailUrl+'api/Mail')
  }

  deleteEmail(id:string): Observable<any>{
    return this.http.delete<any>(this.emailUrl+'api/labels/'+id);
  }

  addEmail(Email: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'api/Mail/send',Email);
  }


 
}

