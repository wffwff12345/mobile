import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(data:any){
    const url="/app/app/user/login"
    return this.http.post(url,data,{
      headers:{  login:'islogin'}
    });
  }
}
