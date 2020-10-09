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
  @Output() filterEvent: EventEmitter<Observable<any>> = new EventEmitter<Observable<any>>();

  filterForm = new FormGroup({
    nameFilter: new FormControl(''),
    priceFilterLE: new FormControl(''),
    priceFilterGE: new FormControl('')
  });


  constructor() { }

  ngOnInit(): void {
    this.filterEvent.emit(this.filterForm.valueChanges);
  }
}
