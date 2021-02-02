import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductCreateDialogComponent } from './containers/product-create-dialog/product-create-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailPageComponent } from './containers/product-detail-page/product-detail-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';
import { ProductListPageComponent } from './containers/product-list-page/product-list-page.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductCreateDialogComponent,
    ProductDetailPageComponent,
    ProductListPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    SharedModule,
  ],
  exports: [ProductListComponent],
})
export class ProductsModule {}
