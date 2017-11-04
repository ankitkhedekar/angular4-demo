import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() public search: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  constructor() { }

  ngOnInit() {
  }

  public searchData(searchText) {
    const products = [
      {id: 101, name: 'Bread-Butter', price: 12, mfgDate: '2017-11-08', categoryId: 1},
      {id: 102, name: 'Bisleri', price: 69, mfgDate: '2017-11-11', categoryId: 2}];

    this.search.emit(products);
  }

}
