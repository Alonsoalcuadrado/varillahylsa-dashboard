import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-prefabricated',
  templateUrl: './prefabricated.component.html',
  styles: [
  ]
})
export class PrefabricatedComponent implements OnInit {

  public prefabricatedProducts: any = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getPrefabricatedProducts().subscribe((products) => {
      this.prefabricatedProducts = products;
    })
  }

}
