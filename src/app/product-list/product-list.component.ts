import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
  private filters: BehaviorSubject<ProductFilter>;
  public filteredProducts: Observable<Product[]>;

  public nameFilter: string = '';
  public priceFilterLE: number = -1;
  public priceFilterGE: number = -1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();

    this.filters = new BehaviorSubject(new ProductFilter('', -1, -1));

    this.filteredProducts = combineLatest([this.products, this.filters]).pipe(
      map(
        ([products, filters]) => {
          return products.filter(product => {
            let nameCondition: boolean;
            let lowerThanPriceCondition: boolean;
            let greaterThanPriceCondition: boolean;

            if (filters.nameFilter === null || filters.nameFilter.length === 0) {
              nameCondition = true;
            }
            else {
              nameCondition = product.name.toLocaleLowerCase().includes(filters.nameFilter.toLocaleLowerCase());
            }

            if ((filters.priceLEFilter === -1 || filters.priceLEFilter === null)) {
              lowerThanPriceCondition = true;
            }
            else {
              lowerThanPriceCondition = product.price <= filters.priceLEFilter;
            }

            if ((filters.priceGEFilter === -1 || filters.priceGEFilter === null)) {
              greaterThanPriceCondition = true;
            }
            else {
              greaterThanPriceCondition = product.price >= filters.priceGEFilter;
            }

            return nameCondition && lowerThanPriceCondition && greaterThanPriceCondition;
          });
        }
      ),
    );
  }

  public onFilterEvent(filters: ProductFilter): void {
    this.nameFilter = filters.nameFilter;
    this.priceFilterLE = filters.priceLEFilter;
    this.priceFilterGE = filters.priceGEFilter;

    this.filters.next(filters);
  }
}
