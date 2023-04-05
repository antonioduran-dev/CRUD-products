import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  //Form group where defines all inputs from the form
  formProduct = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  constructor(
    private _productsServices: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Obtaine the product to update from DB by id obtained
    if (this.getId()) {
      this._productsServices.getProduct(this.getId()).subscribe({
        next: (res) => this.formProduct.patchValue(res[0]),
        error: (err) => console.log(err),
      });
    }
  }

  get name(){
    return this.formProduct.get('name') as FormControl;
  }

  get category(){
    return this.formProduct.get('category') as FormControl;
  }

  get price(){
    return this.formProduct.get('price') as FormControl;
  }

  //Update a product from the DB
  update() {
    if (this.getId) {
      this._productsServices
        .updateProduct(this.getId(), this.formProduct.value)
        .subscribe({
          next: (res) => console.log(res),
          error: (err) => console.log(err),
        });
      this.router.navigate(['/home']);
    }
  }

  private getId() {
    //Obtaine the id from url params
    const idProduct = this.activatedRoute.snapshot.params['id'];
    return idProduct;
  }
}
