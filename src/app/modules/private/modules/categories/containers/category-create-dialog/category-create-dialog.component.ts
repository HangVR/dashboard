import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../../../../services/category.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-category-create-dialog',
  templateUrl: './category-create-dialog.component.html',
  styleUrls: ['./category-create-dialog.component.scss'],
})
export class CategoryCreateDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<CategoryCreateDialogComponent>
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
      this.categoryService
        .create(this.form.value)
        .subscribe(() => this.dialogRef.close());
    }
  }
}
