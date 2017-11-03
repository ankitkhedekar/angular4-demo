import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Category } from '../models/category';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../services/category.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryResolver implements Resolve<Category[]> {

    constructor(private categorysvc: CategoryService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Category[] | Observable<Category[]> | Promise<Category[]> {
        return this.categorysvc.getCategories();
    }

}