import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  Directive,
  ElementRef,
} from '@angular/core';
import { HistoryService } from './history.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalService, ToastService } from 'ng-zorro-antd-mobile';
import { fromEvent } from 'rxjs';

export const touch = document.getElementsByClassName('delete');
export const touchEvent = fromEvent(touch,'touchstart');
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor(
    private service: HistoryService,
    private route: ActivatedRoute,
    private router: Router,
    private Toast: ToastService,
    private Model: ModalService
  ) {}
  // title=this.route.snapshot.queryParams['token'];
  private readonly delete = touchEvent.subscribe(res=>{
    console.log('按压测试');
  })
  history: any;
  test=[1,2,3,4,5,6];
  testState=true
  idlist: any;
  userId = localStorage.getItem('token');
  ngOnInit(): void {
    this.service.getHistory(this.userId).subscribe((res: any) => {
      console.log(res);
      this.history = res.data;
    });
  }
  deleteAll() {
    this.Model.alert('删除所有历史记录', '', [
      { text: '取消', onPress: () => console.log('取消') },
      {
        text: '确定删除',
        onPress: () =>
          new Promise((resolve) => {
            this.Toast.info('清除所有记录', 1000);
            this.service
              .deleteAll(Number(this.userId))
              .subscribe((res: any) => {
                console.log(res);
                this.service.getHistory(this.userId).subscribe((res: any) => {
                  console.log(res);
                  this.history = res.data;
                });
              });
            setTimeout(resolve, 1000);
          }),
        style: {
          color: 'black',
          background: 'white',
        },
      },
    ]);
  }
  deleteOne(id: number) {
    console.log(id);
    const dto = { newId: id, userId: Number(this.userId) };
    console.log(dto);
    this.service.deleteOne(dto).subscribe((res: any) => {
      console.log(res);
      this.service.getHistory(this.userId).subscribe((res: any) => {
        console.log(res);
        this.history = res.data;
      });
    });
  }
  back() {
    this.router.navigate(['/tabbar/my']);
  }
  press(event: any) {
    console.log(event.type)
    console.log('press');
  }
  click(event :any){
    console.log('click')
  }
  deleteTest(event:any){
    console.log(event)
  }
}
