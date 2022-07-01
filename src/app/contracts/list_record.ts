export default class ListRecord{
    id: string;
    name: string;
    stock: number;
    price: number;
    createdDate: string;
    updatedData: string;

    constructor(opt: ListRecord){
        this.id = opt.id;
        this.name = opt.id;
        this.stock = opt.stock;
        this.price = opt.price;
        this.createdDate = opt.createdDate;
        this.updatedData = opt.updatedData;
    }
}