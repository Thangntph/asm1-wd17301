import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { HomeComponent } from './home/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout/base-layout.component';
import { PageNotFoudComponent } from './pages/page-not-foud/page-not-foud/page-not-foud.component';
import { ProductAddComponent } from './pages/product-add/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit/product-edit.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product/admin-product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard/dashboard.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    PageNotFoudComponent,
    ProductAddComponent,
    ProductEditComponent,
    AdminProductComponent,
    DashboardComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
