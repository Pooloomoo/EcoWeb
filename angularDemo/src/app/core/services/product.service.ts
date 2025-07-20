import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product_API:string = 'http://localhost:9000/api/product/';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Products[]>{
    return this.http.get<Products[]>(this.product_API)
  }

  getProduct(id:number): Observable<Products>{
    return this.http.get<Products>(`${this.product_API}${id}`)
  }
}
