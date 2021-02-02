import { Injectable } from '@angular/core';
import { CategoryTemplateResource } from '../resources/category-template-resource';
import { OrganizationService } from './organization.service';
import { Observable } from 'rxjs';
import { ResponseData } from '../model/response/response-data';
import { switchMap } from 'rxjs/operators';
import { ProductTemplateResource } from '../resources/product-template-resource';
import { Template } from '../model/template';

@Injectable({
  providedIn: 'root',
})
export class ProductTemplateService {
  constructor(
    private productTemplateResource: ProductTemplateResource,
    private organizationService: OrganizationService
  ) {}

  public getAll(): Observable<ResponseData<Template>> {
    return this.organizationService.getSelectedOrganizationId().pipe(
      switchMap((id) =>
        this.productTemplateResource.getAll(undefined, undefined, {
          organizationId: id,
        })
      )
    );
  }
}
