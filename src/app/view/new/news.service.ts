import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  search(data:any){
    const url="/app/news/news";    
    return this.http.post(url,data);
  }
}
