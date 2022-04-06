import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { AuthorService } from './../author/author.service';
import { Catalog } from './../catalog.model';
import { CatalogService } from './../catalog/catalog.service';

@Injectable()
export class DataStorageService{

    constructor(private http: HttpClient,
                private ctService: CatalogService,
                private authService: AuthorService) {}

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
        return this.http.get<Catalog[]>('https://videoregistration-60b14-default-rtdb.firebaseio.com/devices.json')
        .pipe(map( responses=>{
            return responses.map( respone=>{
                return {...respone, basket: respone.basket ? respone.basket : [] }
            })
        }))
        .subscribe(
            (list)=>{
               this.ctService.setCamera(list);
               console.log(list)
            }
        )
    }

}