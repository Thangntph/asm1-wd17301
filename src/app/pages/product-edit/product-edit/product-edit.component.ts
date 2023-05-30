import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productSevice: ProductService,private route: ActivatedRoute ,private router: Router){
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productSevice.getProductById(id).subscribe(product => {
      // this.product = product;
      }, error => console.log(error.message))
    })
  }
  
  onHandleAdd(){
    this.productSevice.updateProduct(this.product).subscribe(product =>{
      console.log(product)
      this.router.navigateByUrl("admin/product")
    })
  }
}
