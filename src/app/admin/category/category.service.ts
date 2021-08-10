import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: string[] = ["sunglasses", "glasses", "spectacle case"];

  constructor() { }

  getCategories() {
    return this.categories.slice();
  }

  deleteCategory(category: string) {
    let index = this.categories.indexOf(category);
    this.categories.splice(index, 1);
  }
  addCategory(category: string) {
    this.categories.push(category);
  }
}
