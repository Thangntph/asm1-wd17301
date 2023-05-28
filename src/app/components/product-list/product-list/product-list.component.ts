import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = []
  title = 'Quản lý sp';
  status: boolean = false;
  valueInput: string = "";

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    }, error => console.log(error))
  }

  toggle() {
    console.log('1')
    this.status = !this.status;
  }
  setValue(e: any) {
    this.valueInput = e.target.value
  }
  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('Ban da xoa thanh cong')
      this.products = this.products.filter(item => item.id != id)
    })
  }
  UpdateItem(id: any) {
    this.productService.updateProduct(id).subscribe(() => {
      console.log('Ban da sửa thanh cong')
    })
  }
}
