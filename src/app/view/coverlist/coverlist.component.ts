import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-coverlist',
  templateUrl: './coverlist.component.html',
  styleUrls: ['./coverlist.component.css']
})
export class CoverlistComponent implements OnInit {
  @Input()
  list:any;
  const=[];
  constructor() { }
  ngOnInit(): void {
    console.log('cover')
    this.const=this.list.split(",");
  }

}
