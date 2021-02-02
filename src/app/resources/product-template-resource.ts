import { Injectable } from '@angular/core';
import {
  IResourceMethodObservableStrict,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestMethod,
} from '@ngx-resource/core';
import { environment } from '../../environments/environment';
import { ResponseData } from '../model/response/response-data';
import { Template } from '../model/template';

@Injectable({
  providedIn: 'root',
})
@ResourceParams({
  // IResourceParams
  pathPrefix: '/organizations/{!organizationId}/products/templates',
  url: environment.apiUrl,
})
export class ProductTemplateResource extends Resource {
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
    ResponseData<Template>
  >;
}
