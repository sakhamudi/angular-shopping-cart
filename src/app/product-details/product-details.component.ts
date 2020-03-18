import { Component, OnInit } from "@angular/core";
import { products } from "../products";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
 cartService: CartService
  constructor(route: ActivatedRoute, cartService: CartService) {
    route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
    this.cartService = cartService;
  }

  ngOnInit() {}

  addToCart(product){
    console.log('addToCart');
  this.cartService.addCart(product);
  window.alert('Your product has been added to the cart!');
  }

}
