import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductResource } from '../resources/product-resource';
import { share, switchMap } from 'rxjs/operators';
import { Category } from '../model/category';
import { OrganizationService } from './organization.service';
import { ResponseData } from '../model/response/response-data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private productResource: ProductResource,
    private organizationService: OrganizationService
  ) {}

  public getProducts(categoryId?: string): Observable<ResponseData<Category>> {
    const query = categoryId
      ? { ['filter[category][EQ]']: categoryId }
      : undefined;
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((id) =>
        this.productResource.getAll(undefined, query, {
          organizationId: id,
        })
      )
    );
  }

  public get(id: string): Observable<Product> {
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((organizationId) =>
        this.productResource.get(undefined, undefined, {
          organizationId,
          id,
        })
      ),
      share()
    );
  }

  public create(category: Pick<Product, 'name'>): Observable<any> {
    const productData = {
      ...category,
      customData: {},
    };
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((id) =>
        this.productResource.create(productData, undefined, {
          organizationId: id,
        })
      )
    );
  }

  public update(product: Product): Observable<any> {
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((id) =>
        this.productResource.update(product, undefined, {
          organizationId: id,
          id: product.id,
        })
      )
    );
  }

  public updateImage(id: string, image: any): Observable<any> {
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((organizationId) =>
        this.productResource.updateImage(image, undefined, {
          organizationId,
          id,
        })
      )
    );
  }

  public remove(id: string): Observable<any> {
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((organizationId) =>
        this.productResource.remove(undefined, undefined, {
          organizationId,
          id,
        })
      )
    );
  }
}
