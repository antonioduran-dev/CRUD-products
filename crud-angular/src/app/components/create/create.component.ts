import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {

  //Form group where defines all inputs from the form
  formProduct = new FormGroup({
    'name': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
    'price': new FormControl('', Validators.required)
  });

  constructor(
    private _productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get name(){
    return this.formProduct.get('name') as FormControl;
  }

  get category(){
    return this.formProduct.get('category') as FormControl;
  }

  get price(){
    return this.formProduct.get('price') as FormControl;
  }

  //adds a product to DB
  add() {
    console.log(this.formProduct.value);
    this._productsService.createProduct(this.formProduct.value).subscribe({
      next: (res) => console.log(res),
    });
    this.router.navigate(['/home']);
  }
}
