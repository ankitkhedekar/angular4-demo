import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private results: Product[];
  constructor() { }

  ngOnInit() {
  }

  public onSearch(results: Product[]) {
    this.results = results;
  }

}
