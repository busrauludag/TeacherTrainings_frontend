import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RegisterUser } from '../components/register/RegisterUser';
import { Observable } from 'rxjs';
import { LoginUser } from '../components/login/LoginUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  path = environment.path;
  TOKEN_KEY = "token";

  register(registerUser:RegisterUser){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http.post(this.path + '/user/register', registerUser, {headers:headers}).subscribe(data => {})
  }

  login(loginUser:LoginUser){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http.post(this.path + '/user/login', loginUser, {headers:headers}).subscribe(data => {
      this.saveToken(data.token);
    })
  }

  saveToken(token){
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut(token){
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // property
  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY); // TOKEN_KEY varsa true, yoksa false döner
  }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
