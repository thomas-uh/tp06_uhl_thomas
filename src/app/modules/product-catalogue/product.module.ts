import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductState } from './states/product-state';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { CustomDirectives } from './../../../directives/custom-directives.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipes } from 'src/pipes/custom-pipes.module';
import { ProductComponentRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    ProductFilterComponent,
    ProductListComponent,
    ProductCartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipes,
    CustomDirectives,
    ProductComponentRoutingModule,
    NgxsModule.forRoot([ProductState])
  ],
})
export class ProductModule {
}
