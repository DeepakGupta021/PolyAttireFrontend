import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CardStatusComponent implements OnInit {

  totalPrice : number = 0.0;
  totalQuantity : number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }
  updateCartStatus() {
    //subscribe to the cart TotalPrice

    this.cartService.totalPrice.subscribe(
      data=> this.totalPrice =data
    );

    //subscribe to the cart total quantity

    this.cartService.totalQuantity.subscribe(
      data=> this.totalQuantity =data
    );
  }

}
