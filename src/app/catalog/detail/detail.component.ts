import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BaskerService } from 'src/app/basket.service';
import { Catalog } from './../../catalog.model';

import { CatalogService } from './../catalog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  deviceSelected: Catalog;
  id: number;
  

  constructor(private basketService: BaskerService,
              private ctService: CatalogService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.deviceSelected = this.ctService.getCamera(this.id)
      }
    )
  }

  onAddToBasket() {
    this.basketService.addItemsToBasket(this.deviceSelected.basket)
  }
  onDelete() {
    this.ctService.onDelete(this.id)
    this.router.navigate(['/catalog'])
  }

}
