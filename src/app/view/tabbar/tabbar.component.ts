import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { store } from 'src/app/store/store.component';
import { setIndex } from 'src/app/store/reducers.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {
  ngOnInit(): void {
    this.changeIndex();
  }

  constructor(private router:Router,private route:ActivatedRoute){
  /*   store.subscribe(()=>{
      this.changeIndex();
    }); */
  }
  hidden: boolean = false;
  fullScreen: boolean = false;
  topFlag: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle: object = { height: '100%' };
  selectedIndex:any;
  state:any;
  changeIndex(){
    this.state=store.getState();
    const index=this.state.index;
    this.selectedIndex=index.payload;
    
   /*  if(!!index.payload){
    this.selectedIndex=index.payload;
  }else{
    this.selectedIndex=index;
  } */
  //this.selectedIndex=localStorage.getItem("index");
  }
  showTabBar(event:any) {
    event.preventDefault();
    this.hidden = !this.hidden;
  }

  showNextTabBar(event:any) {
    event.preventDefault();
    const PANE_COUNT = 2;
    if (this.selectedIndex == PANE_COUNT - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
    console.log('selectedIndex: ', this.selectedIndex);
  }

  showFullScreen(event:any) {
    event.preventDefault();
    this.fullScreen = !this.fullScreen;
    this.tabbarStyle = this.fullScreen
      ? {
          position: 'fixed',
          height: '100%',
          width: '100%',
          top: 0
        }
      : { height: '400px' };
  }

  changePosition(event:any) {
    event.preventDefault();
    this.topFlag = !this.topFlag;
  }

  tabBarTabOnPress(pressParam: any) {
    store.dispatch(setIndex(pressParam.index));
    //localStorage.setItem("index",pressParam.index);
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
    if(pressParam.index===1){
      console.log("test");
      this.router.navigate(['/tabbar/test']);
    }
  }
}