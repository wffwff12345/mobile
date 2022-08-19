import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private router:Router) { }
  @Input()
  list:any;
  ngOnInit(): void {
  }
  content(id:number){
    this.router.navigate(['/newsInfobychannel',id]);
  }
  
}
