import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable()
export class ProductService {
    private products: Product[];
    constructor() {
        this.products = [
          { id: 101, name: 'Product 1', price: 10000, categoryId: 1 },
          { id: 102, name: 'Product 2', price: 20000,  categoryId: 2 },
          { id: 103, name: 'Product 3', price: 30000,  categoryId: 1 }
        ];
    }

    public getProducts(): Product[] {
        return this.products;
    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }

}
