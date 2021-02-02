import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../../../../model/category';
import { CategoryService } from '../../../../../../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { CategoryCreateDialogComponent } from '../../../categories/containers/category-create-dialog/category-create-dialog.component';
import { ProductService } from '../../../../../../services/product.service';
import { Product } from '../../../../../../model/product';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
})
export class ProductListPageComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService
      .getProducts()
      .pipe(map((response) => response.data));
  }

  onRemoveClick(product: Product): void {
    this.productService.remove(product.id).subscribe();
  }
}
