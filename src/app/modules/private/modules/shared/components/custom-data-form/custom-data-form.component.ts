import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Template } from '../../../../../../model/template';
import { Product } from '../../../../../../model/product';
import { Category } from '../../../../../../model/category';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-data-form',
  templateUrl: './custom-data-form.component.html',
  styleUrls: ['./custom-data-form.component.scss'],
})
export class CustomDataFormComponent implements OnInit {
  @Input()
  set template(template: Template[]) {
    if (template) {
      template.forEach((item) =>
        this.form.addControl(item.key, this.fb.control(undefined))
      );
    }
    this.form.patchValue(this._data);
    this._template = template;
  }

  get template(): Template[] {
    return this._template;
  }

  @Input()
  set data(data: any) {
    if (data) {
      this.form.patchValue(data);
    }
    this._data = data;
  }

  @Output()
  save: EventEmitter<Category> = new EventEmitter<Category>();

  form: FormGroup;

  private _template: Template[];
  private _data: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {}

  submit(): void {
    this.save.emit(this.form.value);
  }
}
