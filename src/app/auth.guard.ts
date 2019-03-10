import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../app/auth.service';
import { Router } from '@angular/router'; 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authServices : AuthService , private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.authServices.checkAuth().then((res=>{
    alert("res - " +res)
        if (res == null){
          this.router.navigateByUrl('login'); 
        }
      }))
    return true;
  }
}
