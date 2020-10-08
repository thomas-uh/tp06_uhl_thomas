import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/models/Product';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Input() products: Array<Product>;
  @Output() filterEvent: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  filterForm = new FormGroup({
    nameFilter: new FormControl(''),
    priceFilter: new FormControl('')
  });


  constructor() { }

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe(filterValues => {
      let productsFiltered: Product[] = [];

      from(this.products).pipe(
        filter(
          item =>
            item.name.includes(filterValues.nameFilter) &&
            (filterValues.priceFilter !== '' ? item.price <= filterValues.priceFilter : true)
        )
      ).subscribe({
        next: p => productsFiltered.push(p),
        error: err => console.error(err),
        complete: () => this.filterEvent.emit(productsFiltered)
      });
    });
  }
}
