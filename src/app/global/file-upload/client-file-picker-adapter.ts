import {
  FilePickerAdapter,
  FilePreviewModel,
  UploadResponse,
} from 'ngx-awesome-uploader';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';

export class ClientFilePickerAdapter extends FilePickerAdapter {
  constructor(private categoryId, private categoryService: CategoryService) {
    super();
  }

  uploadFile(fileItem: FilePreviewModel): Observable<UploadResponse> {
    return this.categoryService.updateImage(this.categoryId, fileItem.file);
  }

  removeFile(fileItem: FilePreviewModel): Observable<any> {
    return undefined;
  }
}
