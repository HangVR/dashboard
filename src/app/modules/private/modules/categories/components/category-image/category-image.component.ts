import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../../../../model/category';
import { CategoryService } from '../../../../../../services/category.service';
import { FilePickerAdapter } from 'ngx-awesome-uploader';
import { ClientFilePickerAdapter } from '../../../../../../global/file-upload/client-file-picker-adapter';

@Component({
  selector: 'app-category-image',
  templateUrl: './category-image.component.html',
  styleUrls: ['./category-image.component.scss'],
})
export class CategoryImageComponent implements OnInit {
  @Input()
  set category(category: Category) {
    if (category) {
      this.adapter = new ClientFilePickerAdapter(
        category.id,
        this.categoryService
      );
    }
    this._category = category;
  }

  get category(): Category {
    return this._category;
  }

  adapter: FilePickerAdapter;

  private _category: Category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}
}
