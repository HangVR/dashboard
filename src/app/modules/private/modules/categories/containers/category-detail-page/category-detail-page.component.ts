import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../../../../../model/category';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CategoryTemplateService } from '../../../../../../services/category-template.service';
import { flatMap } from 'rxjs/internal/operators';
import { CategoryCreateDialogComponent } from '../category-create-dialog/category-create-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../../../../../model/product';
import { ProductService } from '../../../../../../services/product.service';
import { ProductCreateDialogComponent } from '../../../products/containers/product-create-dialog/product-create-dialog.component';
import { Template } from '../../../../../../model/template';
import { FilePickerAdapter } from 'ngx-awesome-uploader';
import { ClientFilePickerAdapter } from '../../../../../../global/file-upload/client-file-picker-adapter';

@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.scss'],
})
export class CategoryDetailPageComponent implements OnInit {
  category$: Observable<Category>;
  products$: Observable<Product[]>;
  categoryTemplate$: Observable<Template[]>;
  adapter$: Observable<FilePickerAdapter>;

  private categoryId: string;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private categoryTemplateService: CategoryTemplateService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const categoryId$ = this.activatedRoute.paramMap.pipe(
      filter((params) => params.has('id')),
      map((params) => params.get('id'))
    );
    this.category$ = categoryId$.pipe(
      flatMap((id) => this.categoryService.get(id))
    );
    this.products$ = categoryId$.pipe(
      flatMap((id) => this.productService.getProducts(id)),
      map((response) => response.data)
    );
    this.adapter$ = categoryId$.pipe(
      map((id) => {
        return new ClientFilePickerAdapter(id, this.categoryService);
      })
    );
    this.categoryTemplate$ = this.categoryTemplateService
      .getAll()
      .pipe(map((response) => response.data));

    this.activatedRoute.paramMap
      .pipe(
        filter((params) => params.has('id')),
        map((params) => params.get('id'))
      )
      .subscribe((id) => (this.categoryId = id));
  }

  saveCategory(category: Category, data: any): void {
    this.categoryService.update({ ...category, customData: data }).subscribe();
  }

  showCreateDialog(): void {
    this.dialog.open(CategoryCreateDialogComponent, {
      width: '30vw',
      data: { categoryId: this.categoryId },
    });
  }

  showCreateProductDialog(): void {
    this.dialog.open(ProductCreateDialogComponent, {
      width: '30vw',
      data: { categoryId: this.categoryId },
    });
  }
}
