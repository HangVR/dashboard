import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  removeClick: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}
}
