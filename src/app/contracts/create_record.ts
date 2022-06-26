export class CreateRecord {
    name?: string;
    stock?: number;
    price?: number;
    constructor(opt?: CreateRecord) {
        this.name = opt?.name;
        this.stock = opt?.stock;
        this.price = opt?.price;

    }
}
