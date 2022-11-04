import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-zorro-antd-mobile';
import { Router } from '@angular/router';
import { ModalService } from 'ng-zorro-antd-mobile';
import { EditorService } from './editor.service';
import { store } from 'src/app/store/store.component';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  name='';
  password='';
  phone='';
  state: any;
  constructor(private Toast: ToastService, private service: EditorService, private router: Router, private Modal: ModalService) { }
  inputFocus = {
    focus: false,
  };
  autoFocus = { focus: true, date: new Date() };
  ngOnInit(): void {
    this.state = store.getState();
    const name = this.state.name;
    this.name = name.payload;
  }
  back() {
    this.router.navigate(['/tabbar/my']);
  }
  check(){
    return this.name===''||this.password===''||this.phone==='' ;
  }
  editor() {
    this.Modal.alert('修改个人信息', '', [
      { text: '取消修改', onPress: () => console.log('取消') },
      {
        text: '确定修改',
        onPress: () => {
          const dto = { name: this.name, password: this.password, phone: this.phone }
          this.service.editor(dto).subscribe((res: any) => {
            if (res.code == 1001) {
              console.log(res);
              if (res.data.password) {
                this.router.navigate(['/tabbar/my']);
              } else {
                this.router.navigate(['/login']);
              }
            } else {
              this.Toast.fail(res.message, 2000);
            }
          })
        },
        style: {
          color: 'black',
          background: 'white'
        }
      }
    ]);

  }
}
