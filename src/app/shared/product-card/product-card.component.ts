import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: [
  ]
})
export class ProductCardComponent implements OnInit {

  @Input() productImage: string = '';
  @Input() productDescription: string = '';
  @Input() productBrand: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
