import { ProductModule } from './modules/product-catalogue/product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then(
        m => m.AccountModule
      )
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product-catalogue/product.module').then(
        m => m.ProductModule
      )
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
