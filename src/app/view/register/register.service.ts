import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  register(data:any){
    const url="/app/app/user/register";
    return this.http.post(url,data,{
      headers:{  register:'isregister'}});
  }
}
