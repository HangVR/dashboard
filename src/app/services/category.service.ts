import { Injectable } from '@angular/core';
import { CategoryResource } from '../resources/category-resource';
import { OrganizationService } from './organization.service';
import { share, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResponseData } from '../model/response/response-data';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    private categoryResource: CategoryResource,
    private organizationService: OrganizationService
  ) {}

  public getAll(): Observable<ResponseData<Category>> {
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((id) =>
        this.categoryResource.getAll(undefined, undefined, {
          organizationId: id,
        })
      )
    );
  }

  public get(id: string): Observable<Category> {
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((organizationId) =>
        this.categoryResource.get(undefined, undefined, {
          organizationId,
          id,
        })
      ),
      share()
    );
  }

  public updateImage(id: string, image: any): Observable<any> {
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((organizationId) =>
        this.categoryResource.updateImage(image, undefined, {
          organizationId,
          id,
        })
      )
    );
  }

  public create(category: Pick<Category, 'name'>): Observable<any> {
    const categoryData = {
      ...category,
      customData: {},
    };
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((id) =>
        this.categoryResource.create(categoryData, undefined, {
          organizationId: id,
        })
      )
    );
  }

  public update(category: Category): Observable<any> {
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((id) =>
        this.categoryResource.update(category, undefined, {
          organizationId: id,
          id: category.id,
        })
      )
    );
  }

  public remove(id: string): Observable<any> {
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((organizationId) =>
        this.categoryResource.remove(undefined, undefined, {
          organizationId,
          id,
        })
      )
    );
  }
}
