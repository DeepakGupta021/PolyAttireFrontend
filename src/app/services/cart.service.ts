import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  cartItems: CartItem[]=[];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();


  addToCart(theCartItem: CartItem)
  {

    let alreadyExistsInCart : boolean = false;
    let existingCartItem! : CartItem;


    if(this.cartItems.length > 0)
    {
      existingCartItem = this.cartItems.find(tempCartItem => (tempCartItem.id === theCartItem.id && tempCartItem.size === theCartItem.size))!;
    }

    alreadyExistsInCart = (existingCartItem!=undefined);


    if(alreadyExistsInCart)
    {
      existingCartItem.quantity = theCartItem.quantity;
    }else{
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }
  computeCartTotals() {
    
    let totalPrice : number = 0;
    let totalQuantity : number = 0;

    for(let tempCartItem of this.cartItems){
      totalPrice += tempCartItem.quantity * tempCartItem.unitPrice;
      totalQuantity += +tempCartItem.quantity;
    }

    //publish the new values
    this.totalPrice.next(totalPrice);
    this.totalQuantity.next(totalQuantity);


  }

  remove(cartItem: CartItem) {
    const itemIndex = this.cartItems.findIndex(tempCartItem => (tempCartItem.id===cartItem.id && tempCartItem.size===cartItem.size));
    
    if(itemIndex>-1)
    {
      this.cartItems.splice(itemIndex,1);
      this.computeCartTotals();
    }
  }

  constructor() { }
}
