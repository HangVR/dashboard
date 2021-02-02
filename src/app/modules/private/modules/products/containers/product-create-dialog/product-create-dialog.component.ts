import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../../../../../services/product.service';

@Component({
  selector: 'app-product-create-dialog',
  templateUrl: './product-create-dialog.component.html',
  styleUrls: ['./product-create-dialog.component.scss'],
})
export class ProductCreateDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private dialogRef: MatDialogRef<ProductCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { categoryId: string }
  ) {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
    });
  }

  create(): void {
    if (this.form.valid) {
      this.productService
        .create({ ...this.form.value, category: this.data.categoryId })
        .subscribe(() => this.dialogRef.close());
    }
  }
}
