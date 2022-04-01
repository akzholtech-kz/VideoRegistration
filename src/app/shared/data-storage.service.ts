import { Catalog } from './../catalog.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CatalogService } from './../catalog/catalog.service';

@Injectable()
export class DataStorageService{

    constructor(private http: HttpClient,
                private ctService: CatalogService) {}

    onStorageData() {
        const devices = this.ctService.getCameras()
        this.http.put('https://videoregistration-60b14-default-rtdb.firebaseio.com/devices.json', devices)
        .subscribe(
            (response)=>{
                console.log(response)
            }
        )
    }

    onFetchData() {
        this.http.get<Catalog[]>('https://videoregistration-60b14-default-rtdb.firebaseio.com/devices.json')
        .subscribe(
            (list)=>{
               this.ctService.setCamera(list);
               console.log(list)
            }
        )
    }

}