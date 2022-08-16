export class Token{
    accessToken: string;
    expiration: Date;

    constructor(opt: Token){
        this.accessToken = opt.accessToken;
        this.expiration = opt.expiration;
    }
}