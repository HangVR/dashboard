import { TestBed } from '@angular/core/testing';

import { ProductTemplateService } from './product-template.service';

describe('ProductTemplateService', () => {
  let service: ProductTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
