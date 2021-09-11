import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../app.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() product: Product
  @Input() productItemIdIndex: number | undefined

  ngOnInit(): void {
  }

}
