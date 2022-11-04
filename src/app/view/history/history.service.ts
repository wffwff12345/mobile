import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http:HttpClient) { }
  getHistory(id:any){
    const url=`/app/new/getAllHistory/${id}`;    
    return this.http.get(url);
  }
  deleteAll(id:number){
    const url=`/app/new/deleteAllHistory/${id}`;
    return this.http.delete(url);
  }
  deleteOne(dto:any){
    const url="/app/new/deleteHistory";
    return this.http.post(url,dto);
  }
}
