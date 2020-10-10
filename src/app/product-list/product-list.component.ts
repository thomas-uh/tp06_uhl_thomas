import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../product.service';
import { ProductFilter } from '../../models/ProductFilter';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Observable<Product[]>;
  public nameFilter: string = '';
  public priceFilterLE: number = -1;
  public priceFilterGE: number = -1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  public onFilterEvent(filters: ProductFilter): void {
    this.nameFilter = filters.nameFilter;
    this.priceFilterLE = filters.priceLEFilter;
    this.priceFilterGE = filters.priceGEFilter;
  }
}
