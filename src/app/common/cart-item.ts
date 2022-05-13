import { DetailedProduct } from "./detailed-product";
import { Product } from "./product";

export class CartItem {
    id!: number;
    title!:String;
    imageUrl!:String;
    unitPrice!:number;
    quantity!:number;
    size!:string;

    constructor(product:DetailedProduct,quantity:number,size:string)
    {
        this.id = product.id;
        this.title = product.title;
        this.imageUrl = '../assets/images/'+product.displayImage;
        this.unitPrice = product.price;
        this.quantity =quantity;
        this.size = size; 
    }

}
