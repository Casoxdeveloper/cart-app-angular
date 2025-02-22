import { Product } from "./product.model";

export class CartItem{    
    quantity:number=0;
    product!:Product;
    total:number=0;
}