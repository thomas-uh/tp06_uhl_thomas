import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddProductToCart } from '../../../shared/actions/productCart-action';
import { Product } from 'src/app/shared/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  public product$: Observable<Product>;
  public product: Product;
  private productSub: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.product$ = this.productService.getProduct(this.route.snapshot.paramMap.get('name'));

    this.productSub = this.product$.subscribe(val => this.product = val);
  }

  public AddToCart(product: Product): void {
    this.store.dispatch(new AddProductToCart(product));
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }

}
