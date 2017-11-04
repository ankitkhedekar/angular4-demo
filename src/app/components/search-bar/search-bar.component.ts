import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() public search: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
  }

  public searchData(searchText) {
    let products: Product[] = [];
    this.productSvc.getProducts().subscribe(
      data => {
        console.log('got data->', data);
        const temp: Product[] = [];
        data.forEach((p) => {
          if (p.name.toLocaleLowerCase().startsWith(searchText)) {
            temp.push(p);
          }
        });
        products = temp;
        this.search.emit(products);
      },
      error => console.log(error)
    );
  }

}
