import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-zorro-antd-mobile';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { store } from 'src/app/store/store.component';
import { setTokened,setName } from 'src/app/store/reducers.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name='jack';
  password='jack';
  constructor(private Toast:ToastService,private service:LoginService,private router:Router) { }
  inputFocus = {
    focus: false,
  };
  autoFocus = { focus: true, date: new Date() };
  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['/first'])
  }
  login(){
    const dto={name:this.name,password:this.password};
    this.service.login(dto).subscribe((res:any)=>{
      console.log(res);
      if(res.code==1006){
        store.dispatch(setTokened(res.data.token));
        store.dispatch(setName(res.data.user.name));
        this.router.navigate(['/tabbar/news']);
        this.Toast.success(res.message);
      }else{
        this.Toast.fail(res.message);
      }
    })
  }
}
