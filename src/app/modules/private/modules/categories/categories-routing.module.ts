import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListPageComponent } from './containers/categories-list-page/categories-list-page.component';
import { CategoryDetailPageComponent } from './containers/category-detail-page/category-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesListPageComponent,
  },
  {
    path: ':id',
    component: CategoryDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
