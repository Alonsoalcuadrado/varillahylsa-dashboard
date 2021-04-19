import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getPackedProducts() {
    return this.httpClient.get('assets/database/packed.json').pipe(map((response: any) => response.products));
  }

  getSteelProducts() {
    return this.httpClient.get('assets/database/steels.json').pipe(map((response: any) => response.products));
  }

  getAddedProducts() {
    return this.httpClient.get('assets/database/added.json').pipe(map((response: any) => response.products));
  }

  getPrefabricatedProducts() {
    return this.httpClient.get('assets/database/prefabricated.json').pipe(map((response: any) => response.products));
  }

  getOtherProducts() {
    return this.httpClient.get('assets/database/other.json').pipe(map((response: any) => response.products));
  }
}
