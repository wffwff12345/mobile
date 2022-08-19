import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from './news.service';
import { Router } from '@angular/router';
import { store } from 'src/app/store/store.component';
import { ThisReceiver } from '@angular/compiler';
import { ActionSheetService, ToastService } from 'ng-zorro-antd-mobile';
import { en_US, ru_RU, zh_CN, sv_SE, da_DK } from 'ng-zorro-antd-mobile';
@Component({
  selector: 'app-new-infobychannel',
  templateUrl: './new-infobychannel.component.html',
  styleUrls: ['./new-infobychannel.component.css']
})
export class NewInfobychannelComponent implements OnInit {
  constructor(private route:ActivatedRoute,private service:NewsService,private Toast:ToastService,private router:Router,public changeDetectorRef:ChangeDetectorRef,private _actionSheet: ActionSheetService, private _toast: ToastService) { 
  }  
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
  dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' }
  ].map(obj => ({
    icon: `<img src="https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png" style="width:36px"/>`,
    title: obj.title
  }));

  showShareActionSheetMulpitleLine = () => {
    const data = [[...this.dataList, this.dataList[2]], [this.dataList[3], this.dataList[4]]];
    this._actionSheet.showShareActionSheetWithOptions(
      {
        options: data,
        message: '请选择转发方式',

      },
      (buttonIndex, rowIndex) => {
        console.log(buttonIndex);
      }
    );
  }
}
  interface content{
    type:string;
    content:string;
  }
