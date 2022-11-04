import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent} from '../my/my.component';
import { NewsComponent } from '../news/news.component';
import { TestComponent } from '../test/test.component';
const routes: Routes = [
  {
    path:'news',
    component:NewsComponent,
  },
  {
    path:'test',
    component:TestComponent,
  },
  {
    path:'my',
    component:MyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
