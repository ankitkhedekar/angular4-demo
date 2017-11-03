import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

    private readonly API_URL = 'http://bst-products-api.azurewebsites.net/api/categories';

    constructor(private http: Http) { }

    getCategories(): Observable<Category[]> {
        return this.http.get(this.API_URL)
        .map((res: Response) => res.json())
        .catch((err) => err);
    }

}
