import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailPageComponent } from './containers/product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from './containers/product-list-page/product-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListPageComponent,
  },
  {
    path: ':id',
    component: ProductDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
