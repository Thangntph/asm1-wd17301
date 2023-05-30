import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout/base-layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';
import { ProductAddComponent } from './pages/product-add/product-add/product-add.component';

import { ProductDetailComponent } from './pages/product-detail/product-detail/product-detail.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard/dashboard.component';
import { ProductEditComponent } from './pages/product-edit/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    PageNotFoundComponent,
    ProductAddComponent,

    ProductDetailComponent,
    DashboardComponent,
    ProductEditComponent,
    
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
