import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../models/category';
import { Product } from '../../models/products';
import { ProductService } from '../../services/product.service';

import {} from '../../validators/';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    private categories: Category[] = [
        { id: 1, name: 'Electronics'},
        { id: 2, name: 'Footwear'},
        { id: 3, name: 'Books'}
    ];

    private product: Product;
    constructor(private productSvc: ProductService) {
        this.product = new Product();
    }

  ngOnInit() {
  }

  save(addForm) {
      console.log('addForm:', this.product);
  }



}
