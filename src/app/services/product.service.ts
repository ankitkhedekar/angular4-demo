import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {
    private products: Product[];
    private readonly API_URL = 'http://bst-products-api.azurewebsites.net/api/products';
    constructor(private http: Http, private httpClient: HttpClient) {
        this.products = [
        ];
    }


    public getProducts(): Observable<Product[]> {
        // return this.http.get(this.API_URL)
        // .map((res: Response) => {
        //     const data = res.json();
        //     this.products = data;
        //     return data;
        // })
        // .catch(err => Observable.throw(err));
        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        const options = {
            headers: httpHeaders
        };

        return this.httpClient.get<Product[]>(this.API_URL, options);
    }

    public getProduct(id: number): Observable<Product> {
        return this.http.get(this.API_URL + '/' + id)
        .map((res: Response) => res.json())
        // .then(() => console.log('here'))
        .catch(err => Observable.throw(err));
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
