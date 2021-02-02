import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDataFormComponent } from './components/custom-data-form/custom-data-form.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { FilePickerModule } from 'ngx-awesome-uploader';

@NgModule({
  declarations: [CustomDataFormComponent, ImageUploadComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FilePickerModule,
  ],
  exports: [CustomDataFormComponent, ImageUploadComponent],
})
export class SharedModule {}
