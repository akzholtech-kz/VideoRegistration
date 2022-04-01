import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Basket } from '../basket.model';
import { Catalog } from './../catalog.model';
@Injectable()
export class CatalogService {
  SelectedCam = new Subject<Catalog[]>();
  private cameras: Catalog[] = [
    new Catalog(
      'Basic',
      'Camera-X1 is the best camera  in the world with night view',
      'https://media.ldlc.com/r374/ld/products/00/05/92/40/LD0005924069_1.jpg',
      [new Basket('Basic', 1, 500)]
    ),
    new Catalog(
      'Standart',
      'Camera-X1 is the best camera  in the world with night view',
      'https://www.gigaset.com/media/catalog/product/c/a/camera_outdoor_tl.jpg',
      [new Basket('Standart', 1, 500)]
    ),
    new Catalog(
      'Premium',
      'Camera-X1 is the best camera  in the world with night view',
      'https://media.ldlc.com/r374/ld/products/00/05/72/50/LD0005725015_1.jpg',
      [new Basket('Premium', 1, 500)]
    ),
  ];
  setCamera(camerss: Catalog[]) {
  this.cameras = camerss;
  }


  getCameras() {
    return this.cameras;
  }
  getCamera(index: number) {
    return this.cameras[index];
  }
  onDelete(index: number) {
     this.cameras.splice(index, 1);
    console.log(this.cameras)
  }
}
