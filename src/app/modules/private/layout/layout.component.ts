import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../services/organization.service';
import { Observable } from 'rxjs';
import { Organization } from '../../../model/organization';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  organizations$: Observable<Organization[]>;
  selectedOrganizations$: Observable<Organization>;

  constructor(private organizationService: OrganizationService) {}

  ngOnInit(): void {
    this.organizationService.getAll().pipe(map((response) => response.data));
    this.selectedOrganizations$ = this.organizationService.getSelectedOrganization();
  }

  select(organization: Organization): void {
    this.organizationService.selectOrganization(organization);
  }
}
