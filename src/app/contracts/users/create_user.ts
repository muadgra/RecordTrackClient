export class Create_User{
    success: boolean;
    message: string;

    constructor(opt: Create_User){
        this.success = opt.success;
        this.message = opt.message;
    }
}