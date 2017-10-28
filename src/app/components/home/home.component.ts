import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private name: string;
    private location: string;
    private today: Date;

    private colors: string[] = ['red', 'green', 'blue'];
    private products: Product[] = [
        { id: 101, name: 'Product 1', price: 10000, categoryId: 1 },
        { id: 102, name: 'Product 2', price: 20000,  categoryId: 2 },
        { id: 103, name: 'Product 3', price: 30000,  categoryId: 1 }
    ];
    private myClass = 'strike';

    constructor() {
       this.name = 'Demo User';
       this.location = 'Mumbai';
       this.today = new Date();
    }

    ngOnInit() {

    }

    changeClass() {
        if (this.myClass === '') {
            this.myClass = 'strike';
        } else {
            this.myClass = '';
        }
    }

}
