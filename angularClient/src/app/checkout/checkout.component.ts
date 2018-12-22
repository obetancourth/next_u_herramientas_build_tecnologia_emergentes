import { Component, OnInit } from '@angular/core';
import { CartService } from '../api/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public cartItems: any = [];
  public totalOrder = 0;
  constructor( private cart: CartService, private router: Router) { }

  ngOnInit() {
    this.cart.getCart().subscribe(
      (res) => {
        this.cartItems = res;
        this.cart.cartEmmit(this.cartItems);
        this.cartItems.map((o) => {
          this.totalOrder += (o.precio * o.cantidad);
        });
      }
    );
  }
  cancel() {
    this.router.navigate(['/main']);
  }
  onConfirm() {
    this.cart.confirmCart().subscribe(
      (res) => {
        if (res === 'ok') {
          alert('Orden Confirmada');
          this.router.navigate(['/main']);
        } else {
          alert('Error al procesar orden');
        }
      }
    );
  }
}
