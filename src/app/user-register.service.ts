import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientAuth } from 'src/httpauth.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http:HttpClient,private httpClientAuth:HttpClientAuth) { }
  public doRegistration(user:User){
    return this.http.post("http://localhost:8081/api/register",user);

  }
public doLogin(user:User){
  return this.http.post("http://localhost:8081/api/login",user);
}
public doInvalid(user:User){
  return this.http.get("http://localhost:8081/api/v1/test",user);
}


}
