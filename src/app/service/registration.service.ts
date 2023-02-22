import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  isLoggedIn: boolean = false;
  private URL = "http://localhost:9999/api/v2/track";

  constructor(private httpClient:HttpClient) { }

  createEmployee(data:any):Observable <Object>{
    console.log(data);
    return this.httpClient.post(this.URL,data);
  }

}
