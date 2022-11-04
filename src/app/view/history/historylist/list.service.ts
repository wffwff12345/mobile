import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }
  get(id:number){
    const url=`/app/news/getnew/${id}`;
    return this.http.get(url);
  }
}
