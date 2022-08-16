import { Token } from "./token";

export class TokenResponse{
    token: Token;

    constructor(opt: TokenResponse){
        this.token = opt.token;
    }
    
}