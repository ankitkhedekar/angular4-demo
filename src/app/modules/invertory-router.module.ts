import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule} from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { EditProductComponent } from '../components/edit-product/edit-product.component';
import { ProductResolver } from '../resolvers/product.resolver';
import { CategoryResolver } from '../resolvers/category.resolver';
import { UnsavedComponentGuard } from '../guards/unsaved.guard';
import { SearchComponent } from '../components/search/search.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'add', component: AddProductComponent, resolve: { categories: CategoryResolver} },
    { path: 'edit/:id',
      component: EditProductComponent,
      resolve: { product: ProductResolver, categories: CategoryResolver },
      canDeactivate: [UnsavedComponentGuard] },
    { path: 'search', component: SearchComponent },
    { path: 'category', loadChildren: 'app/category-module/category.module#CategoryModule' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class InvertoryRouterModule { }
