import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../../../../../model/category';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CategoryTemplateService } from '../../../../../../services/category-template.service';
import { CategoryTemplate } from '../../../../../../model/category-template';
import { flatMap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.scss'],
})
export class CategoryDetailPageComponent implements OnInit {
  category$: Observable<Category>;
  categoryTemplate$: Observable<CategoryTemplate[]>;
  constructor(
    private categoryService: CategoryService,
    private categoryTemplateService: CategoryTemplateService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.category$ = this.activatedRoute.paramMap.pipe(
      filter((params) => params.has('id')),
      flatMap((params) => this.categoryService.get(params.get('id')))
    );
    this.categoryTemplate$ = this.categoryTemplateService
      .getAll()
      .pipe(map((response) => response.data));
  }

  saveCategory(category: Category): void {
    this.categoryService.update(category).subscribe();
  }
}
