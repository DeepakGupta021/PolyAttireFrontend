import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem[] =[];
  total : number = 0.0;
  subTotal : number = 0.0;
  tax :  number = 0.0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(data=>this.total=data);
    this.cartService.computeCartTotals();
    console.log("total "+ this.total);
    this.tax = this.total*(0.12);//tax set to 12%
    this.subTotal = this.total-this.tax;
  }

}
