import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Get products method
  getProducts(){
    return this.http.get(this.URL + '/products');
  }
}
