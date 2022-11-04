import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private http:HttpClient) { }
  image(file:any){
    const url='/app/app/user/image';
    return this.http.post(url,file);
  }
}
