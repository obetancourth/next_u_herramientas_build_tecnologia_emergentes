import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];
  products = [];
  search = window.sessionStorage.getItem('search') || '';
  public cartChangeEmitter$: EventEmitter<object>;

  constructor(private http: HttpClient) {
    this.cartChangeEmitter$ = new EventEmitter();
  }

  getProducts = ( search: string ) => {
      let uri = 'productos/all';
      if (!/^\s*$/.test(search)) {
        uri = `productos/search/${search}`;
      }
      return this.http.get(uri);
  }

  getProductById = (id: string) => {
    const uri = `productos/one/${id}`;
    return this.http.get(uri);
  }

  addToCart = ( productId, amount) => {
    const body = {
      id: productId,
      cantidad: amount
    };
    const uri = 'cart/add';
    return this.http.post(
      uri,
      body
    );
  }
  getCart = () => {
    const uri = 'cart';
    return this.http.get(
      uri
    );
  }
  cartEmmit(cart) {
    this.cartChangeEmitter$.emit(cart);
  }

  confirmCart() {
    const uri = 'cart/confirm';
    return this.http.post(uri, {}, { responseType: 'text' });
  }
}
