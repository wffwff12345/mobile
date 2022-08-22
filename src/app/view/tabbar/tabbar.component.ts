import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { store } from 'src/app/store/store.component';
import { setIndex } from 'src/app/store/reducers.component';
@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {
  ngOnInit(): void {
    this.changeIndex();
  }

  constructor(private router:Router){
  /*   store.subscribe(()=>{
      this.changeIndex();
    }); */
  }
  hidden: boolean = false;
  fullScreen: boolean = false;
  topFlag: boolean = false;
  tintColor: string = 'red';
  unselectedTintColor: string = '#888';
  tabbarStyle: object = { height: '100%' };
  selectedIndex=0;
  state:any;
  changeIndex(){
    this.state=store.getState();
    const index=this.state.index;
    this.selectedIndex=index.payload;
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
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
    if(pressParam.index===1){
      this.router.navigate(['/tabbar/my']);
    }
    else{
      console.log("news")
      /* if (history.state['result']) {
        console.log('navigate');
        this.router.navigate(['/tabbar/news']);
      }
      else {
        console.log("history");
        history.replaceState({ result: true }, '/tabbar/news')
      } */
      // this.router.navigate(['/tabbar/news']);
      //history.go(-1);
      setTimeout(()=>{
        location.replace('/tabbar/news');
      },)

    }
  }
}