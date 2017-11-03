import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../models/category';
import { Product } from '../../models/products';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

import {} from '../../validators/';
import { Router, ActivatedRoute } from '@angular/router';
import { UnsavedComponentBase } from '../../guards/unsaved.guard';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, UnsavedComponentBase {

    private categories: Category[];

    private product: Product;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productSvc: ProductService,
        private categorySvc: CategoryService) {

    }

  ngOnInit() {
      this.product = new Product();
      this.categories = this.route.snapshot.data['categories'];
  }

  save(addForm) {
      this.productSvc.addProduct(this.product);
  }



}
