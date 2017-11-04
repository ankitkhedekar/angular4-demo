import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

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
import { UnsavedComponentGuard } from './guards/unsaved.guard';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataInterceptor } from './interceptors/data-interceptors';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { LoginComponent } from './components/login/login.component';

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
    EditProductComponent,
    SearchComponent,
    SearchBarComponent,

    UserLoginComponent,
    AdminLoginComponent,
    LoginComponent
  ],
  entryComponents: [
    UserLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    InvertoryRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
      ProductService,
      CategoryService,
      ProductResolver,
      CategoryResolver,
      UnsavedComponentGuard,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: DataInterceptor,
        multi: true,
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
