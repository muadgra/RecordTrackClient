import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Token } from 'src/app/contracts/token/token';
import { TokenResponse } from 'src/app/contracts/token/tokenResponse';
import { Create_User } from 'src/app/contracts/users/create_user';
import { Login_User } from 'src/app/contracts/users/login_user';
import UserInformation from 'src/app/types/models/UserInformation';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService: HttpClientService) {
   }

   async create(user: UserInformation) : Promise<Create_User>{
    const observable: Observable<Create_User | UserInformation> = this.httpClientService.post<Create_User | UserInformation>({
      controller: "users"
    }, user);
    return await firstValueFrom(observable) as Create_User;
   }

   async login(user: Login_User, callback: () => void){
    const observable: Observable<any | TokenResponse> = this.httpClientService.post<any | TokenResponse>({
      controller: "users",
      action: "login"
    }, user)
    const tokenResponse: TokenResponse = 
    await firstValueFrom(observable) as TokenResponse;
    if(tokenResponse){
      localStorage.setItem("accessToken", tokenResponse.token.accessToken);
    }
    callback();
    return tokenResponse;
  }
}
