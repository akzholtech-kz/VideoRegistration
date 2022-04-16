import { Component, OnDestroy, OnInit, Output, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OutletContext } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { BaskerService } from 'src/app/basket.service';
import { Basket } from './../../basket.model';

@Component({
  selector: 'app-basket-detail',
  templateUrl: './basket-detail.component.html',
  styleUrls: ['./basket-detail.component.css']
})
export class BasketDetailComponent implements OnInit, OnDestroy {
  orders: Basket[];
  @ViewChild('f') fnForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editIndexNum: number;
  editItem: Basket;
  total: number = 0;

 
  constructor(private bsService: BaskerService) {}
  ngOnInit(){
     this.orders = this.bsService.getBasket();
    this.subscription = this.bsService.startedEditing
    .subscribe(
      (index: number) =>{
        this.editIndexNum = index;
        this.editMode = true;
        this.editItem = this.bsService.getBasketItem(index);
        this.fnForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      }
    )
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newelement = new Basket(value.name, value.amount, value.sum)
    if(this.editMode){
      this.bsService.updateItem(this.editIndexNum, newelement)
    }else{
      this.bsService.addItemToBasket(newelement)
    }
    this.editMode = false;
    form.reset();
    
  }
  onClear() {
    this.fnForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.bsService.deleteItem(this.editIndexNum)
    this.onClear()
    this.total = 0;
  }
  onTotal() {
    for(let i of this.orders){
      this.total += i.sum 
    }
      
    

   this.bsService.selectedDev.next(this.total)
   this.editMode = true;
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
}
