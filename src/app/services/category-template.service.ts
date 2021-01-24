import { Injectable } from '@angular/core';
import { CategoryResource } from '../resources/category-resource';
import { OrganizationService } from './organization.service';
import { Observable } from 'rxjs';
import { ResponseData } from '../model/response/response-data';
import { Category } from '../model/category';
import { switchMap } from 'rxjs/operators';
import { CategoryTemplateResource } from '../resources/category-template-resource';
import { CategoryTemplate } from '../model/category-template';

@Injectable({
  providedIn: 'root',
})
export class CategoryTemplateService {
  constructor(
    private categoryTemplateResource: CategoryTemplateResource,
    private organizationService: OrganizationService
  ) {}

  public getAll(): Observable<ResponseData<CategoryTemplate>> {
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((id) =>
        this.categoryTemplateResource.getAll(undefined, undefined, {
          organizationId: id,
        })
      )
    );
  }
}
