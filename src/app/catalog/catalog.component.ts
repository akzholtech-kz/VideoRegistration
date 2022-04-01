import { CatalogService } from './catalog.service';
import { Catalog } from './../catalog.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  // providers: [CatalogService]
})
export class CatalogComponent implements OnInit {
  
  cameras: Catalog[];
  

  constructor(private ctService: CatalogService) { }

  ngOnInit(){
   this.cameras = this.ctService.getCameras()
  }
  

}
