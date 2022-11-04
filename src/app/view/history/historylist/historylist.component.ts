import { Component, OnInit,Input } from '@angular/core';
import { ListService } from './list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-historylist',
  templateUrl: './historylist.component.html',
  styleUrls: ['./historylist.component.css']
})
export class HistorylistComponent implements OnInit {

  constructor(private service:ListService,private router:Router) { }
  @Input()
  id:any;
  title="";
  type=0;
  cover="";
  author="";
  createTime="";
  ngOnInit(): void {
    console.log(this.id);
    this.service.get(this.id).subscribe((res:any)=>{
      console.log("list of history")
      console.log(res.data);
      this.title=res.data.title;
      this.type=res.data.type;
      this.cover=res.data.cover;
      this.author=res.data.author;
      this.createTime=res.data.createTime;
    })
  }
  press(){
    console.log('press');
  }
  content(id:number){
    this.router.navigate(['/historyInfo',id]);
  }

}
interface data{
  type:number;
  author:string;
  channel:string;
  content: content[];
  id:number;
  title:string;
  cover:string;
  createTime:string;
  userId:number
}

interface content{
  type:string;
  content:string;
}
