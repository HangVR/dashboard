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
import { Organization } from '../model/organization';

@Injectable({
  providedIn: 'root',
})
@ResourceParams({
  // IResourceParams
  pathPrefix: '/organizations',
  url: environment.apiUrl,
})
export class OrganizationResource extends Resource {
  @ResourceAction({
    method: ResourceRequestMethod.Get,
  })
  getAll: IResourceMethodObservable<any, ResponseData<Organization>>;
}
