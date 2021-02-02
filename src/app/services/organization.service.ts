import { Injectable } from '@angular/core';
import { OrganizationResource } from '../resources/organization-resource';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseData } from '../model/response/response-data';
import { Organization } from '../model/organization';
import { filter, map, share, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  constructor(
    private httpClient: HttpClient,
    private organizationResource: OrganizationResource
  ) {}

  private readonly allOrganizations = this.organizationResource
    .getAll()
    .pipe(share());

  private selectedOrganization: BehaviorSubject<Organization> = new BehaviorSubject(
    undefined
  );

  public getAll(): Observable<ResponseData<Organization>> {
    return this.allOrganizations;
  }

  public selectOrganization(organization: Organization): void {
    this.selectedOrganization.next(organization);
  }

  public getSelectedOrganization(): Observable<Organization> {
    if (!this.selectedOrganization.getValue()) {
      this.getAll()
        .pipe(
          map((response) => response.data[0]),
          tap((organization) => {
            this.selectedOrganization.next(organization);
          })
        )
        .subscribe(
          () => console.log('OK done'),
          (error) => console.error(error)
        );
    }
    return this.selectedOrganization.asObservable();
  }

  public getSelectedOrganizationId(): Observable<string> {
    return this.getSelectedOrganization().pipe(
      filter((organization) => !!organization),
      map((organization) => organization.id)
    );
  }
}
