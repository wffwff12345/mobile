import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from './news.service';
import { store } from 'src/app/store/store.component';
import { setChannel, setTitle } from 'src/app/store/reducers.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  ngOnInit(): void {
    this.state = store.getState();
    const channel = this.state.channel;
    this.channel = channel.payload;
    this.index=channel.payload;
    console.log('this.channel1');
    console.log(this.channel);
    const item = { index:this.channel }
    this.loadding(item);
  }

  constructor(private router: Router, private service: NewsService) { }
  search() {
    this.router.navigate(['/newlist']);
  }
  flag = true;
  index = 0;
  channel = '';
  list!: [];
  length=0;
  state:any;
  onChange(item: any) {
    console.log("onChange");
    store.dispatch(setChannel(item.index));
    this.loadding(item);
  }
  
  onTabClick(item: any) {
    console.log("onTabClizck");
    store.dispatch(setChannel(item.index));
    this.loadding(item);
  }
  loadding(item:any){
    console.log(item);
    if (item.index == 1) {
      this.channel = '体育';
    }
    else if (item.index == 2) {
      this.channel = '时政';
    }
    else if (item.index == 3) {
      this.channel = '美食';
    }
    else if (item.index == 4) {
      this.channel = '交通';
    }
    else if (item.index == 5) {
      this.channel = '教育';
    }
    else{
      this.channel='';
    }
    const dto = { channel: this.channel, page: 1, size: 10 };
    console.log(dto);
    this.service.search(dto).subscribe((res: any) => {
      console.log(res);
      this.list = res.data;
      console.log(this.list.length);
      this.length = this.list.length;
      console.log(this.length);
    })
  }

  selectCard(e: any) {
    console.log(' ', JSON.stringify(e));
  }

  changeIndex() {
    this.index = 0;
  }
  onLeftClick() {
    console.log('onLeftClick');

  }
  content(id: number) {
    this.router.navigate(['/newInfo', id]);
  }
}