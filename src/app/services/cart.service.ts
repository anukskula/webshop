import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from 'src/app/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: {cartItem: Item, quantity: number}[] = [];
  cartChanged = new Subject();

  constructor() { }

  addToCart(item: Item): void {
    let cartItem = this.productsInCart.find(productInCart => productInCart.cartItem.title == item.title);
    if (cartItem) {
      // cartItem.quantity = cartItem.quantity + 1;
      cartItem.quantity++;
    } else {
      this.productsInCart.push({cartItem: item, quantity: 1});
    }
  }

  getItemsFromCart(): {cartItem: Item, quantity: number}[] {
    return this.productsInCart.slice();
  }

  deleteOneFromCart(index: number): void {
    this.productsInCart.splice(index, 1)
  }

  deleteAllFromCart(): void {
    this.productsInCart = [];
  }

}
