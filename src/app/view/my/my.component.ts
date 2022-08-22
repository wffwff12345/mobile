import { Component, OnInit } from '@angular/core';
import { store } from 'src/app/store/store.component';
@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor() { }
  state:any;
  name:any;
  ngOnInit(): void {
    this.state=store.getState();
    const name=this.state.name;
    this.name=name.payload;
  }

}
