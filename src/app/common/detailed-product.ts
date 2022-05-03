export class DetailedProduct {

    id! : number;
    title! : String;
    description! : String;
    categoryId! : number;
    rating! : number;
    mrp! : number;
    price! : number;
    createdDate! : Date;
    color! : String;
    displayImage! : String;
    imageArray! : String[];
    sizesAndQuantity! : Map<String,number>;
    tags! : String[];

}
