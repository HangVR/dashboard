import { Component, Input, OnInit } from '@angular/core';
import { FilePickerAdapter } from 'ngx-awesome-uploader';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  @Input()
  imageUrl: string;

  @Input()
  adapter: FilePickerAdapter;

  constructor() {}

  ngOnInit(): void {}
}
