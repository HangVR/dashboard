import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Product[] = [];

  @Output()
  removeClick: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}
}
