import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Producto } from 'src/app/shared/products';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  producto: Producto = {
    name: '',
    category: '',
    price: '',
  };

  constructor(
    private _productsService: ProductsService,
    private router: Router
  ){}

  add(){
    this._productsService.createProduct(this.producto).subscribe({
      next: (res) => console.log(res)
    });
    this.router.navigate(['/home']);
  }
  
}
