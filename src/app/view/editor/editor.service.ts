import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private http:HttpClient) { }
  editor(dto:any){
    const url="/app/app/user/editor";
    return this.http.post(url,dto);
  }
}
