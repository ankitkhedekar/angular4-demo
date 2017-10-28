import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

    @Input() products:Product[];
  constructor() { }

  ngOnInit() {
  }

}
