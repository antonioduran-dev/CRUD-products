import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Producto } from 'src/app/shared/products';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  producto: Producto = {
    id: '',
    name: '',
    category: '',
    price: '',
  };

  constructor(
    private _productsServoces: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Obtaine the id from url params
    const idProduct = this.activatedRoute.snapshot.params['id'];

    if (idProduct) {
      //Obtaine the product to update from DB by id obtained
      this._productsServoces.getProduct(idProduct).subscribe({
        next: (res) => (this.producto = res[0]),
        error: (err) => console.log(err),
      });
    }
  }

  //Update a product from the DB
  update() {
    this._productsServoces
      .updateProduct(this.producto.id, this.producto)
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err),
      });
    this.router.navigate(['/home']);
  }
}
