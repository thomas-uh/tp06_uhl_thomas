import { Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../product.service';
import { filter, map } from 'rxjs/operators';

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

  public onFilterEvent(filters: Observable<any>): void {
    filters.subscribe(filtersValues => {
      this.nameFilter = filtersValues.nameFilter;
      this.priceFilterLE = filtersValues.priceFilterLE === '' ? -1 : filtersValues.priceFilterLE;
      this.priceFilterGE = filtersValues.priceFilterGE === '' ? -1 : filtersValues.priceFilterGE;
    });
  }
}
