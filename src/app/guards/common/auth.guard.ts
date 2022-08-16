import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { _isAuthenticated } from 'src/app/services/common/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private toastr: ToastrService,
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (!_isAuthenticated) {
      this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
      this.toastr.error('You need to sign in first.');

    }

    return true;
  }

}
