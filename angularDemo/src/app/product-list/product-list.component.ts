import { Component,OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products:Products[] = []

  constructor (private ProductService:ProductService) {}

  ngOnInit():void{
    this.ProductService.getAllProduct().subscribe({
      next:data => this.products = data,
      error:err => console.error('Cant Get Data',err)
    })
  }

}
