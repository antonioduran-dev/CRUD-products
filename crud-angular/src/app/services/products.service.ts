import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../shared/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Get products method
  getProducts() {
    return this.http.get(this.URL + '/products');
  }

  getProduct(id: string) {
    return this.http.get(this.URL + '/products/' + id);
  }

  //Create a product
  createProduct(producto: Producto) {
    return this.http.post(this.URL + '/products', producto);
  }

  //Update a product
  updateProduct(id: string, producto: Producto) {
    return this.http.patch(this.URL + '/products/' + id, producto);
  }

  //Delete a product
  deleteProduct(id: string) {
    return this.http.delete(this.URL + '/products/' + id);
  }
}
