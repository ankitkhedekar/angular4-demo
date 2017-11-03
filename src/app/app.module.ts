import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { OddEvenPipe } from './pipes/odd-even.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { InvertoryRouterModule } from './modules/invertory-router.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddProductComponent } from './components/add-product/add-product.component';

import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';

import { MinValidator } from './validators/min-validator';
import { MaxValidator } from './validators/max-validator';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductResolver } from './resolvers/product.resolver';
import { CategoryResolver } from './resolvers/category.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTableComponent,
    OddEvenPipe,
    HighlightDirective,
    PageNotFoundComponent,
    ContactComponent,
    AddProductComponent,
    MinValidator,
    MaxValidator,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    InvertoryRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
      ProductService,
      CategoryService,
      ProductResolver,
      CategoryResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
