import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-added',
  templateUrl: './added.component.html',
  styles: [
  ]
})
export class AddedComponent implements OnInit {

  public addedProducts: any = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAddedProducts().subscribe((products) => {
      this.addedProducts = products;
    })
  }

}
