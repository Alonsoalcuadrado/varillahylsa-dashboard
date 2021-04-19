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
}
