import {
  FilePickerAdapter,
  FilePreviewModel,
  UploadResponse,
} from 'ngx-awesome-uploader';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

export class ProductFilePickerAdapter extends FilePickerAdapter {
  constructor(private productId, private productService: ProductService) {
    super();
  }

  uploadFile(fileItem: FilePreviewModel): Observable<UploadResponse> {
    return this.productService.updateImage(this.productId, fileItem.file);
  }

  removeFile(fileItem: FilePreviewModel): Observable<any> {
    return undefined;
  }
}
