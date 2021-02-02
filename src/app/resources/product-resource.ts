import { Injectable } from '@angular/core';
import {
  IResourceMethodObservable,
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
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
@ResourceParams({
  // IResourceParams
  pathPrefix: '/organizations/{!organizationId}/products',
  url: environment.apiUrl,
})
export class ProductResource extends Resource {
  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }

  @ResourceAction({
    method: ResourceRequestMethod.Get,
  })
  getAll: IResourceMethodObservable<any, ResponseData<any>>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{!id}',
  })
  get: IResourceMethodObservableStrict<
    undefined,
    undefined,
    { id: string; organizationId: string },
    Product
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
    Product,
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
