import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemsInCart: Item[] = [];
  sumOfCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
  }

  onEmptyCart() {
    this.cartService.deleteAllFromCart();
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
  } 

  onRemoveFromCart(item: Item) {
    let index = this.itemsInCart.indexOf(item);
    this.cartService.deleteOneFromCart(index);
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
  }

  calculateSumOfCart () {
    this.sumOfCart = 0;
    this.itemsInCart.forEach(itemInCart => {
      this.sumOfCart += itemInCart.price
    });
  }

}
