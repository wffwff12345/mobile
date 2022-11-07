import {
  Component, Directive, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2
} from '@angular/core';
import { interval, Subject } from 'rxjs';
import { switchMap, takeUntil, take, filter, tap } from 'rxjs/operators';

@Directive({
  selector: '[appPushDelete]'
})
export class PushDeleteDirective {
  pushStart$ = new Subject();
  pushEnd$ = new Subject();
  @Output('delete')
  delete= new EventEmitter();
  constructor(private el: ElementRef, private rd2: Renderer2) { }

  ngOnInit(): void {
  }
  @HostListener("mousedown")
  @HostListener("touchstart")
  pushStart() {
    this.pushStart$.pipe(
      tap(() => {
        this.rd2.addClass(this.el.nativeElement, 'vibrate-1')
      }),
      switchMap(() => interval(1000)),
      tap(time => console.log(time)),
      takeUntil(this.pushEnd$),
      filter(time => time === 2),
      take(1)
      ).subscribe(() => {
        console.log('done');
        this.rd2.removeClass(this.el.nativeElement,'vibrate-1');
        this.rd2.setStyle(this.el.nativeElement,'display','none');
        const parentNode=this.rd2.parentNode(this.el.nativeElement);
        this.rd2.removeChild(parentNode,this.el.nativeElement);
        this.delete.emit('done');
      })
    this.pushStart$.next('start')
    console.log('start')
  }
  @HostListener('mouseup')
  @HostListener('mouseleave')
  @HostListener('touchend')
  pushEnd() {

    this.pushEnd$.next('over')
    this.rd2.removeClass(this.el.nativeElement,'vibrate-1');
  }
}
