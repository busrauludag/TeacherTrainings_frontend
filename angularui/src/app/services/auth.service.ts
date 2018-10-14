import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RegisterUser } from '../components/register/RegisterUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  path = environment.path;

  register(registerUser:RegisterUser){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http.post(this.path + '/user/register', registerUser, {headers:headers}).subscribe(data => {
      
    })
  }
}
