import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { CustomDirectives } from './../../../directives/custom-directives.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipes } from 'src/pipes/custom-pipes.module';
import { ProductComponentRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProductFilterComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipes,
    CustomDirectives,
    ProductComponentRoutingModule,
  ],
})
export class ProductModule {
}
