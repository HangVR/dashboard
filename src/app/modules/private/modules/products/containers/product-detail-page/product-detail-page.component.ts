import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../../../../model/product';
import { Template } from '../../../../../../model/template';
import { filter, map } from 'rxjs/operators';
import { ProductService } from '../../../../../../services/product.service';
import { ProductTemplateService } from '../../../../../../services/product-template.service';
import { Category } from '../../../../../../model/category';
import { flatMap } from 'rxjs/internal/operators';
import { ClientFilePickerAdapter } from '../../../../../../global/file-upload/client-file-picker-adapter';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FilePickerAdapter } from 'ngx-awesome-uploader';
import { ProductFilePickerAdapter } from '../../../../../../global/file-upload/product-file-picker-adapter';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailPageComponent implements OnInit {
  product$: Observable<Product>;
  productTemplate$: Observable<Template[]>;
  adapter$: Observable<FilePickerAdapter>;

  constructor(
    private productService: ProductService,
    private productTemplateService: ProductTemplateService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productTemplate$ = this.productTemplateService
      .getAll()
      .pipe(map((response) => response.data));
    const productId$ = this.activatedRoute.paramMap.pipe(
      filter((params) => params.has('id')),
      map((params) => params.get('id'))
    );
    this.product$ = productId$.pipe(
      flatMap((id) => this.productService.get(id))
    );
    this.adapter$ = productId$.pipe(
      map((id) => {
        return new ProductFilePickerAdapter(id, this.productService);
      })
    );
  }

  saveProduct(product: Product, data: any): void {
    this.productService.update({ ...product, customData: data }).subscribe();
  }
}
