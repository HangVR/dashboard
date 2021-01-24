import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryTemplate } from '../../../../../../model/category-template';
import { Category } from '../../../../../../model/category';

@Component({
  selector: 'app-category-data-form',
  templateUrl: './category-data-form.component.html',
  styleUrls: ['./category-data-form.component.scss'],
})
export class CategoryDataFormComponent implements OnInit {
  @Input()
  set categoryTemplate(categoryTemplate: CategoryTemplate[]) {
    if (categoryTemplate) {
      categoryTemplate.forEach((item) =>
        this.form.addControl(item.key, this.fb.control(undefined))
      );
    }
    this._categoryTemplate = categoryTemplate;
  }

  get categoryTemplate(): CategoryTemplate[] {
    return this._categoryTemplate;
  }

  @Input()
  set category(category: Category) {
    console.log('setup category', category);
    if (category) {
      this._category = category;
      this.form.patchValue(category.customData);
    }
  }

  @Output()
  save: EventEmitter<Category> = new EventEmitter<Category>();

  form: FormGroup;

  private _categoryTemplate: CategoryTemplate[];
  private _category: Category;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {}

  submit(): void {
    console.log(this._category);
    this.save.emit({ ...this._category, customData: this.form.value });
  }
}
