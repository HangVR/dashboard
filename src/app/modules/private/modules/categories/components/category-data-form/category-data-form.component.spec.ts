import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDataFormComponent } from './category-data-form.component';

describe('CategoryDataFormComponent', () => {
  let component: CategoryDataFormComponent;
  let fixture: ComponentFixture<CategoryDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
