import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Producto } from 'src/app/shared/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //Create an empty array of Producto
  listProduct: Producto[] = [];

  //Add products service and router to constructor
  constructor(
    private _productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarProducts();
  }

  //Create method to show the products from DB
  listarProducts() {
    this._productsService.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.listProduct = <any>res;
      },
      error: (err) => console.log(err),
    });
  }
  //Deletes a product from DB
  delete(id: string) {
    this._productsService.deleteProduct(id).subscribe({
      next: (res) => {
        console.log('Product deleted');
        this.listarProducts();
      },
      error: (err) => console.log(err),
    });
  }
}
