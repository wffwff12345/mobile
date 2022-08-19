import { Component, OnInit, ElementRef, Renderer2  } from '@angular/core';
import { NewsService } from './news.service';
import { Router } from '@angular/router';
import { store } from 'src/app/store/store.component';
import { setTitle } from 'src/app/store/reducers.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  list:any;
  value: string = '3';
  able=false;
  autoFocus = {
    focusValue: true
  };
  focusObj = {
    focusValue: false,
    date: new Date()
  };
  title=this.route.snapshot.queryParams['title'];
  constructor(private _element: ElementRef, private _renderer: Renderer2,private service:NewsService,private router:Router,private route:ActivatedRoute) {}
  ngOnInit(): void {
    console.log("ngon")
    console.log(this.title);
    if(this.title==null){
      this.title = this.value;
      const title = this.value;
      store.dispatch(setTitle(title));
    }
    this.value = this.title;
    const dto={title:this.title,page:1,size:10}
    this.service.search(dto).subscribe((res:any)=>{
      console.log(res);
      this.list=res.data;
    })
  }

  change(event:any) {
    console.log(event, 'onChange');
    store.dispatch(setTitle(this.value));
    const title=event;
    store.dispatch(setTitle(title));
    const dto={title:title,page:1,size:10}
    this.service.search(dto).subscribe((res:any)=>{
      console.log(res);
      this.list=res.data;
    })
  }

  submit(value:any) {
    console.log(value, 'onSubmit');
    store.dispatch(setTitle(this.value));
    const title=this.value;
    store.dispatch(setTitle(title));
    const dto={title:title,page:1,size:10}
    this.service.search(dto).subscribe((res:any)=>{
      console.log(res);
      this.list=res.data;
    })
  }

  clear(value:any) {
    console.log(value, 'onClear');
  }

  focus() {
    console.log('onFocus');
  }

  blur() {
    console.log('onBlur');
    
  }

  cancel() {
    console.log('onCancel');
    this.router.navigate(['/tabbar/news'])
  }

  handleClick() {
    this.focusObj = {
      focusValue: true,
      date: new Date()
    };
  }
  flag = true;
  index = 1;

  onChange(item:any) {
    console.log('onChange', item);
  }

  onTabClick(item:any) {
    console.log('onTabClick', item);
  }

  selectCard(e:any) {
    console.log(' ', JSON.stringify(e));
  }

  changeIndex() {
    this.index = 0;
  }
  content(id:number){
    this.router.navigate(['/newInfo',id]);
  }
  
}
