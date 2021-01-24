import { Injectable } from '@angular/core';
import {
  IResourceMethodObservable,
  IResourceMethodObservableStrict,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestMethod,
} from '@ngx-resource/core';
import { environment } from '../../environments/environment';
import { ResponseData } from '../model/response/response-data';
import { Category } from '../model/category';
import { CategoryTemplate } from '../model/category-template';

@Injectable({
  providedIn: 'root',
})
@ResourceParams({
  // IResourceParams
  pathPrefix: '/organizations/{!organizationId}/categories/templates',
  url: environment.apiUrl,
})
export class CategoryTemplateResource extends Resource {
  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }

  @ResourceAction({
    method: ResourceRequestMethod.Get,
  })
  getAll: IResourceMethodObservableStrict<
    undefined,
    undefined,
    { organizationId: string },
    ResponseData<CategoryTemplate>
  >;
}
