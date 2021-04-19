import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-packed',
  templateUrl: './packed.component.html',
  styles: [
  ]
})
export class PackedComponent implements OnInit {

  public packedProducts: any = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getPackedProducts().subscribe((products) => {
      this.packedProducts = products;
    })
  }

}
