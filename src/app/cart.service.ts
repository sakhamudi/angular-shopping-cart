import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService{

 items = [];

  constructor() { }

  addCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;

  }

}