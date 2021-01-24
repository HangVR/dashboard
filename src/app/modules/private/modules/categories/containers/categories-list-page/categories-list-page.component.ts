import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../../../../model/category';
import { CategoryService } from '../../../../../../services/category.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CategoryCreateDialogComponent } from '../category-create-dialog/category-create-dialog.component';

@Component({
  selector: 'app-categories-list-page',
  templateUrl: './categories-list-page.component.html',
  styleUrls: ['./categories-list-page.component.scss'],
})
export class CategoriesListPageComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService
      .getAll()
      .pipe(map((response) => response.data));
  }

  showCreateDialog(): void {
    const dialogRef = this.dialog.open(CategoryCreateDialogComponent, {
      width: '30vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onRemoveClick(category: Category): void {
    this.categoryService.remove(category.id).subscribe();
  }
}
