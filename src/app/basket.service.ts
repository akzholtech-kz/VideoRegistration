import { Basket } from './basket.model';

import { Subject } from 'rxjs';


export class BaskerService {
  startedEditing = new Subject<number>();
  selectedDev = new Subject<number>();
 private lists: Basket[] = [];

  getBasket() {
    return this.lists;
  }
  getBasketItem(index: number) {
    return this.lists[index];
  }

  addItemToBasket(item: Basket) {
    this.lists.push(item);
  }

  addItemsToBasket(device: Basket[]) {
    this.lists.push(...device);
  }
  updateItem(index: number, newitem: Basket) {
    this.lists[index] = newitem;
  }
  deleteItem(index: number) {
      this.lists.splice(index, 1)
  }
}
