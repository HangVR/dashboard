import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListPageComponent } from './containers/categories-list-page/categories-list-page.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryEditPageComponent } from './containers/category-edit-page/category-edit-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryCreateDialogComponent } from './containers/category-create-dialog/category-create-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryDetailPageComponent } from './containers/category-detail-page/category-detail-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CategoryDataFormComponent } from './components/category-data-form/category-data-form.component';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { CategoryImageComponent } from './components/category-image/category-image.component';

@NgModule({
  declarations: [
    CategoriesListPageComponent,
    CategoryListComponent,
    CategoryItemComponent,
    CategoryEditPageComponent,
    CategoryCreateDialogComponent,
    CategoryDetailPageComponent,
    CategoryDataFormComponent,
    CategoryImageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CategoriesRoutingModule,
    MatDialogModule,
    MatTabsModule,
    FilePickerModule,
  ],
})
export class CategoriesModule {}
