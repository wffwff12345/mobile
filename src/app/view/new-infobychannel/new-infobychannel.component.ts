import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from './news.service';
import { ToastService } from 'ng-zorro-antd-mobile';
import { Router } from '@angular/router';
import { store } from 'src/app/store/store.component';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-new-infobychannel',
  templateUrl: './new-infobychannel.component.html',
  styleUrls: ['./new-infobychannel.component.css']
})
export class NewInfobychannelComponent implements OnInit {
  constructor(private route:ActivatedRoute,private service:NewsService,private Toast:ToastService,private router:Router) { }
  id=this.route.snapshot.params['id'];
  title:string|null=null;
  contents:content[]=[];
  date:any;
  authorname:any;
  text:string|null=null;
  icon_name='#icon-aixin';
  state:any;
  isvisible=false;
  ngOnInit(): void {
    this.service.get(this.id).subscribe((res:any)=>{
      this.title=res.data.title;
      this.contents=JSON.parse(res.data.content);
      console.log(this.contents);
      this.date=res.data.createTime;
      this.authorname=res.data.author;
    })
  }
  back(){
/*     history.back();
 */    
    
    this.state=store.getState();
    const title=this.state.title;
    console.log("返回前")
    console.log(title.payload);
    console.log("返回后")

    this.router.navigate(['/tabbar/news'])
  }
  showModal(){
    this.isvisible=true;
  }
  close(){
    this.text=null;
    this.isvisible=false;
  }
  footer = [
    {
      text: '评论',
      onPress: () => {
        console.log('评论');
        console.log(this.text);
        if(this.text==null){
          this.Toast.fail('评论内容为空,不能提交!',2000);
          return
        }
        this.isvisible=false;
        this.Toast.success('感谢您的评论',3000);
        this.text=null;
      }
    }
  ];

}
  interface content{
    type:string;
    content:string;
  }