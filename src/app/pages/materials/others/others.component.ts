import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styles: [
  ]
})
export class OthersComponent implements OnInit {

  public otherProducts: any = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getOtherProducts().subscribe((products) => {
      this.otherProducts = products;
    })
  }

}
