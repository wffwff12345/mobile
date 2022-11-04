import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { store } from './store/store.component';
import { ToastService } from 'ng-zorro-antd-mobile';
@Injectable({
  providedIn: 'root'
})
export class ViewauthGuard implements CanActivate {
  constructor(private router: Router,private Toast:ToastService) {

  }
  state: any;
  canActivate(): boolean {
   /*  this.state = store.getState();
    const token = this.state.token;
    if(token.payload) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    } */
    const token=localStorage.getItem("token");
    if(token){
      return true;
    }else{
      this.Toast.fail("Token已失效或丢失!",2000);
      this.router.navigate(['/login']);
      return false;
    }
  }
}