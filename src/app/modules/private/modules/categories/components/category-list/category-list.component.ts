import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Category } from '../../../../../../model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent implements OnInit {
  @Input()
  categories: Category[] = [];

  @Output()
  removeClick: EventEmitter<Category> = new EventEmitter<Category>();

  constructor() {}

  ngOnInit(): void {}
}
