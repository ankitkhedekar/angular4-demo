import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/products';
import { UnsavedComponentBase } from '../../guards/unsaved.guard';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, UnsavedComponentBase {

    private id: number;
    private categories: Category[];
    private product: Product;
    private eform: FormGroup;

  constructor(
      private productSvc: ProductService,
      private categorySvc: CategoryService,
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder
  ) {

  }

  ngOnInit() {
      this.id = parseInt(this.route.snapshot.params.id, 10);
      this.categories = this.route.snapshot.data['categories'];
      this.product = this.route.snapshot.data['product'];

      const nameControl = new FormControl(this.product.name,
          Validators.compose([ Validators.required, Validators.minLength(3)])
      );

      const priceControl = new FormControl(this.product.price,
          Validators.compose([ Validators.required, Validators.min(100), Validators.max(1000)])
      );

      this.eform = this.fb.group({
          'name': nameControl,
          'price': priceControl,
          'categoryId': [this.product.categoryId, Validators.required],
          'id': [this.product.id]
      });
  }

  edit(editForm) {
      console.log('edited:', this.eform.value);
      this.productSvc.editProduct(this.eform.value);
  }

}
