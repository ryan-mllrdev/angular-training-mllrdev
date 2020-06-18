import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../shared/interfaces';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    
    this.dataService.getProducts()
    .subscribe((products: IProduct[]) => this.products = products);
    
  }

}
