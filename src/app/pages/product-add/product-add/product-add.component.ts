import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productSevice: ProductService, private router: Router) { }

  onHandleAdd() {
    this.productSevice.addProducts(this.product).subscribe(product => {
      console.log(product)
      this.router.navigateByUrl("admin/product")
    })
  }
}
