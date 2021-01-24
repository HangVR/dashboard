import { TestBed } from '@angular/core/testing';

import { CategoryTemplateService } from './category-template.service';

describe('CategoryTemplateService', () => {
  let service: CategoryTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
