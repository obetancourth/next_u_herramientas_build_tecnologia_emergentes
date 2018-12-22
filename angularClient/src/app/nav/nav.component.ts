import { Component, OnInit } from '@angular/core';
import { CartService } from '../api/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public cartItems = [];
  public cartNumbers = 0;
  constructor(private _cart: CartService) { }

  ngOnInit() {
    this._cart.cartChangeEmitter$.subscribe(
      (cartItems) => {
        this.cartItems = cartItems;
        this.cartNumbers = this.cartItems.length;
    });
  }

}
