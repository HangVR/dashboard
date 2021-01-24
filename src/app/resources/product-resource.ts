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

@Injectable({
  providedIn: 'root',
})
@ResourceParams({
  // IResourceParams
  pathPrefix: '/products',
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
}
