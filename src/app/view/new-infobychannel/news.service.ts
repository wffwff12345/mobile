import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  get(id:number){
    const url=`/app/news/getnew/${id}`;    
    return this.http.get(url);
  }
  addHistory(dto:any){
    const url="/app/new/history";    
    return this.http.post(url,dto);
  }
  comment(dto:any){
    const url='/app/new/comment';
    return this.http.post(url,dto);
  }
}
