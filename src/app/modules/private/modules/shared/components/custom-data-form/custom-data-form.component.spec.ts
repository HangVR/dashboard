import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDataFormComponent } from './custom-data-form.component';

describe('CustomDataFormComponent', () => {
  let component: CustomDataFormComponent;
  let fixture: ComponentFixture<CustomDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
