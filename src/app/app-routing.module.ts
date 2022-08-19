import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './view/first/first.component';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';
import { TabbarComponent } from './view/tabbar/tabbar.component';
import { NewsComponent } from './view/news/news.component';
import { MyComponent } from './view/my/my.component';
import { NewComponent } from './view/new/new.component';
import { NewInfoComponent } from './view/new-info/new-info.component';
import { NewInfobychannelComponent } from './view/new-infobychannel/new-infobychannel.component';
const routes: Routes = [
  {
    path:"",
    redirectTo:"first",
    pathMatch:'full'
  },
  {
    path:"first",
    component:FirstComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"tabbar",
    component:TabbarComponent,
    children:[
      {
        path:'news',
        component:NewsComponent
      },
      {
        path:'my',
        component:MyComponent
      }
    ]
  },
  {
    path:'newlist',
    component:NewComponent
  },
  {
    path:'newInfo/:id',
    component:NewInfoComponent
  },
  {
    path:'newsInfobychannel/:id',
    component:NewInfobychannelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
