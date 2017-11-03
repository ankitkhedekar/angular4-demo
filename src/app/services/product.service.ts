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

    public getProduct(id: number): Product {
        let product: Product;
        this.products.forEach((p) => {
            if (p.id === id) {
                product = p;
            }
        });

        return product;
    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public editProduct(product: Product): void {
        console.log('product', product);
        this.products = this.products.map((p) => {
            if (p.id === product.id) {
                console.log('found');
                return product;
            }
            return p;
        });

        console.log('new products', this.products);
    }

}
