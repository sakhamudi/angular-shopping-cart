import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService{

 items = [];

  constructor() { }

  addCart(product){
    console.log('Add Cart');
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