import { Component, OnInit } from '@angular/core';
import { store } from 'src/app/store/store.component';
import { setName,deleteName,setIndex,deleteIndex,added,deleteed,setTokened,removeTokened,setTitle,deleteTitle,setChannel,deleteChannel,setImage} from 'src/app/store/reducers.component';
import { Router } from '@angular/router';
import { MyService } from './my.service';
import { ModalService, ToastService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor(private router:Router,private service:MyService,private Toast:ToastService,private Modal:ModalService) { }
  state:any;
  imageShow=false;
  name:any;
  files :Array<img>= [];
  file:any;
  multipleTab = 0;
  img= 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg';
  data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
  },];
  ngOnInit(): void {
    console.log("name")
    this.state=store.getState();
    const name=this.state.name;
    this.name=name.payload;
    const image=this.state.image;
    if (image.payload != null) {
      this.img = image.payload;
    }
  }
  logout(){
    this.Modal.alert('退出', '', [
      { text: '取消退出', onPress: () => console.log('取消') },
      {
        text: '确定退出',
        onPress: () =>
         /*  new Promise(resolve => {
            setTimeout(resolve, 1000);
            this.Toast.info('已退出', 1000);
            localStorage.removeItem("token");
            localStorage.removeItem("persist:root");
            this.router.navigate(['/login']);
          }), */
         {
          this.Toast.info('已退出', 1000);
          localStorage.removeItem("token");
          localStorage.removeItem("persist:root");
          this.router.navigate(['/login']);
         },
        style: {
          color: 'black',
          background: 'white'
        }
      }
    ]);
  }
  editor(){
    this.router.navigate(['/editor']);
  }
  history(){
    console.log('历史');
    this.router.navigate(['/history']);
  }
  image(){
    this.imageShow=true;
    console.log("image")
  }
  upload(event:any){
    this.file=event.target.files[0];
    const fd=new FormData();
    fd.append("file",this.file,this.file.name);
    this.service.image(fd).subscribe((res:any)=>{
      console.log(res);
      this.img=res.data.image;
    })
  }

  fileChange(params:any) {
    console.log(params);
    const { files, type, index } = params;
    this.files = files;
  }

  imageClick(params:any) {
    console.log('imageClick')
    console.log(params);
  }
  footer = [
    {
      text: '设置',
      onPress: () => {
        const file:any=this.files[0].url;
        //console.log(file.url);
        if(file==null){
          this.Toast.fail('未上传头像,请上传头像！');
          //this.imageShow=false;
          return;
        }
        console.log(file);
        this.service.image(file).subscribe((res:any)=>{
          console.log(res);
          if(res.code==1001){
            this.img=file;
            this.Toast.success('已成功设置头像!');
            this.imageShow = false;
            this.files = [];
            store.dispatch(setImage(file));
            return;
          }else{
            this.Toast.fail('设置头像失败!');
          }
        })
      }
    }
  ];
}
interface img{
  type:string;
  url:string;
}
