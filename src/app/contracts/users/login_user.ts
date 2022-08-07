export class Login_User{
    usernameOrEmail: string;
    password: string;
    success?: boolean;
    message?: string;
    constructor(opt: Login_User){
        this.usernameOrEmail = opt.usernameOrEmail;
        this.password = opt.password;
    }
}