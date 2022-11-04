import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirstComponent } from './view/first/first.component';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';
import { TabbarComponent } from './view/tabbar/tabbar.component';
import { NewsComponent } from './view/news/news.component';
import { NewComponent } from './view/new/new.component';
import { NewInfoComponent } from './view/new-info/new-info.component';
import { NewInfobychannelComponent } from './view/new-infobychannel/new-infobychannel.component';
import { ViewauthGuard } from './viewauth.guard';
import { HistoryComponent } from './view/history/history.component';
import { HistoryInfoComponent } from './view/history/history-info/history-info.component';
import { EditorComponent } from './view/editor/editor.component';
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
    path:"editor",
    component:EditorComponent,
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"tabbar",
    component:TabbarComponent,
    canActivate:[ViewauthGuard],
    children:[
      {
        path:'',
        loadChildren:()=> import('./view/menu/menu.module').then(x=>x.MenuModule)
      }
    ]
  },
  {
    path:'newlist',
    component:NewComponent,
    canActivate:[ViewauthGuard],
  },
  {
    path:'newInfo/:id',
    component:NewInfoComponent,
    canActivate:[ViewauthGuard],
  },
  {
    path:'newsInfobychannel/:id',
    component:NewInfobychannelComponent,
    canActivate:[ViewauthGuard],
  },
  {
    path:'historyInfo/:id',
    component:HistoryInfoComponent,
    canActivate:[ViewauthGuard],
  },
  {
    path:'history',
    component:HistoryComponent,
    canActivate:[ViewauthGuard],

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: environment.useHash,
    // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
    // Pls refer to https://ng-alain.com/components/reuse-tab
    scrollPositionRestoration: 'top',
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
