import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-zorro-antd-mobile';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:any;
  password:any;
  phone:any;
  constructor(private Toast:ToastService,private service:RegisterService,private router:Router) { }
  inputFocus = {
    focus: false,
  };
  autoFocus = { focus: true, date: new Date() };
  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['/first'])
  }
  register(){
    const dto={name:this.name,password:this.password,phone:this.phone}
    this.service.register(dto).subscribe((res:any)=>{
      console.log(res);
      if(res.code==1012){
        this.router.navigate(['/login']);
        this.Toast.success(res.message,2000);
      }else{
        this.Toast.fail(res.message,3000);
      }
    })
  }
}