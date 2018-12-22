import { Component, OnInit } from '@angular/core';
import { CartService } from '../../api/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor( private cart: CartService, private route: Router) { }
  public productos;
  public search = '';
  public cartItems;
  ngOnInit() {
    this.cart.getProducts(this.search).subscribe(
      (res) => {
        this.productos = res;
      }
    );
    this.cart.getCart().subscribe(
      (res) => {
        this.cartItems = res;
        this.cart.cartEmmit(this.cartItems);
      }
    );
  }

  searchChange(search) {
    this.cart.getProducts(this.search).subscribe(
      (res) => {
        console.log(res);
        this.productos = res;
      }
    );
  }
  addCart(e, prod, value) {
    const { _id } = prod;
    this.cart.addToCart(_id, value).subscribe((res) => {
      this.cartItems = res;
      this.cart.cartEmmit(this.cartItems);
    });
  }
  showDetail(prod) {
    console.log(prod);
    this.route.navigate(['/detail', prod._id]);
  }

}
