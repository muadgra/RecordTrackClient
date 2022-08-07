export default class UserInformation{
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
    
    constructor(opt: UserInformation){
        this.name = opt.name;
        this.surname = opt.surname;
        this.email = opt.email;
        this.username = opt.username;
        this.password = opt.password;
        this.passwordConfirm = opt.passwordConfirm;
    }
}