import { Component, OnInit } from '@angular/core';
import { BaskerService } from 'src/app/basket.service';
import { Basket } from './../basket.model';

@Component({
  selector: 'app-ip-register',
  templateUrl: './ip-register.component.html',
  styleUrls: ['./ip-register.component.css']
})
export class IpRegisterComponent implements OnInit {
  orders: Basket[];
  // index: number = 0;
  totals:number;
  constructor(private bsService: BaskerService) { }

  ngOnInit(){
    this.orders = this.bsService.getBasket()
    this.bsService.selectedDev
    .subscribe(
      (respone)=>{
        this.totals = respone;
      }
    )
  }
  onEditItem(index: number) {
    this.bsService.startedEditing.next(index)
  }
 
}
