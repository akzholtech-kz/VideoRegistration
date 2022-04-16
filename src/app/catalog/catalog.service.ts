import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Catalog } from './../catalog.model';
@Injectable()
export class CatalogService {
  SelectedCam = new Subject<Catalog[]>();
   private cameras: Catalog[] = [];
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
  }
}
