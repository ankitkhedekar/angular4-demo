import { Resolve, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../models/products';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../services/product.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolver implements Resolve<Product> {

    constructor(private productSvc: ProductService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
        const id = route.params.id;
        return this.productSvc.getProduct(id);
    }
}
