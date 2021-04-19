import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-steels',
  templateUrl: './steels.component.html',
  styles: [
  ]
})
export class SteelsComponent implements OnInit {

  public steelProducts: any = [];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getSteelProducts().subscribe((products) => {
      this.steelProducts = products;
    })
  }

}
