import { Injectable } from '@angular/core';
import {
  IResourceMethodObservableStrict,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestBodyType,
  ResourceRequestMethod,
} from '@ngx-resource/core';
import { environment } from '../../environments/environment';
import { ResponseData } from '../model/response/response-data';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
@ResourceParams({
  // IResourceParams
  pathPrefix: '/organizations/{!organizationId}/categories',
  url: environment.apiUrl,
})
export class CategoryResource extends Resource {
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
    ResponseData<Category>
  >;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{!id}',
  })
  get: IResourceMethodObservableStrict<
    undefined,
    undefined,
    { id: string; organizationId: string },
    Category
  >;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
  })
  create: IResourceMethodObservableStrict<
    Pick<Category, 'name'>,
    undefined,
    { organizationId: string },
    ResponseData<any>
  >;

  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/{!id}',
  })
  update: IResourceMethodObservableStrict<
    Category,
    undefined,
    { id: string; organizationId: string },
    ResponseData<any>
  >;

  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/{!id}/image',
    requestBodyType: ResourceRequestBodyType.BLOB,
  })
  updateImage: IResourceMethodObservableStrict<
    any,
    undefined,
    { id: string; organizationId: string },
    ResponseData<any>
  >;

  @ResourceAction({
    method: ResourceRequestMethod.Delete,
    path: '/{!id}',
  })
  remove: IResourceMethodObservableStrict<
    undefined,
    undefined,
    { id: string; organizationId: string },
    ResponseData<any>
  >;
}
