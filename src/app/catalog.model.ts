import { Basket } from './basket.model';

export class Catalog{
    public name: string;
    public description: string;
    public imagePath: string;
    public basket: Basket[];
    constructor(name: string, description: string, imagePath: string, basket: Basket[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath
        this.basket = basket;
    }
}