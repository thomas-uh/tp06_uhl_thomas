import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  public renderedProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: res => { 
        this.products = JSON.parse(JSON.stringify(res));
        this.renderedProducts = this.products;
      },
      error: err => console.error(err),
      complete: () => {}
    });
  }

  public onFilterEvent(products: Product[]): void {
    this.renderedProducts = products;
  }
}
