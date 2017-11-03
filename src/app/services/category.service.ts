import { Injectable } from '@angular/core';
import { Category } from '../models/Category';

@Injectable()
export class CategoryService {

    private categories: Category[] = [
        { id: 1, name: 'Electronics'},
        { id: 2, name: 'Footwear'},
        { id: 3, name: 'Books'}
    ];

  constructor() { }

  getCategories(): Category[] {
      return this.categories;
  }

}
