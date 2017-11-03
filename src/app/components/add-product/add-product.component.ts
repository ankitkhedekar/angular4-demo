import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../models/category';
import { Product } from '../../models/products';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

import {} from '../../validators/';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    private categories: Category[];

    private product: Product;
    constructor(private productSvc: ProductService, private categorySvc: CategoryService) {

    }

  ngOnInit() {
      this.product = new Product();
      this.categories = this.categorySvc.getCategories();
  }

  save(addForm) {
      this.productSvc.addProduct(this.product);
      console.log('all products:', this.productSvc.getProducts());
  }



}
