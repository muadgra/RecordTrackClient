import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService,) { 
    
  }
  identityCheck(){
    const token: string | null = localStorage.getItem("accessToken");
    //const decodeToken = this.jwtHelper.decodeToken(token!);
    const expired = token ? this.jwtHelper.isTokenExpired(token) : true;
    _isAuthenticated = token != null && !expired;
    return true;
  }

  get isAuthenticated(): boolean{
    return _isAuthenticated;
  }
}

export let _isAuthenticated: boolean;