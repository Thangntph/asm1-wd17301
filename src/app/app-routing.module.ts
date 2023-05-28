import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout/base-layout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail/product-detail.component';
import { HomeComponent } from './home/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit/product-edit.component';
import { PageNotFoudComponent } from './pages/page-not-foud/page-not-foud/page-not-foud.component';

const routes: Routes = [
  {
    path: '', component: ProductListComponent, children: [
      { path: "", component: HomeComponent },
      { path: "product/:id", component: ProductDetailComponent }
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "product", component: ProductListComponent},
      { path: "product/add", component: ProductAddComponent },
      { path: "product/:id/edit", component: ProductEditComponent }
    ]
  },
  { path: "**", component: PageNotFoudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
