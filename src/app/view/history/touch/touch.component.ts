import { Component, OnInit  HostListener
} from '@angular/core';
import { interval,Subject } from 'rxjs';
import { switchMap ,takeUntil,take,filter,tap } from 'rxjs/operators';
@Component({
  selector: 'app-touch',
  templateUrl: './touch.component.html',
  styleUrls: ['./touch.component.css']
})
export class TouchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
