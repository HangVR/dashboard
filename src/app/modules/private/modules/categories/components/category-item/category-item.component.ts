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
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryItemComponent implements OnInit {
  @Input()
  category: Category;

  @Output()
  removeClick: EventEmitter<Category> = new EventEmitter<Category>();

  constructor() {}

  ngOnInit(): void {}
}
