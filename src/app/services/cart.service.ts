import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from 'src/app/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: Item[] = [];
  cartChanged = new Subject();

  constructor() { }

  addToCart(item: Item): void {
    this.productsInCart.push(item);
  }

  getItemsFromCart(): Item[] {
    return this.productsInCart.slice();
  }

  deleteOneFromCart(index: number): void {
    this.productsInCart.splice(index, 1)
  }

  deleteAllFromCart(): void {
    this.productsInCart = [];
  }

}
