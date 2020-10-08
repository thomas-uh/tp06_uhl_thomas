import { Product } from './../models/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nextTick } from 'process';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<object> {
    return this.http.get('http://localhost:4200/assets/products.json');
  }
}
