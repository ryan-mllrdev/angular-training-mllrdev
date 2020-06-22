import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../shared/interfaces';
import { DataService } from '../../core/data.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private dataService: DataService, private appComponent: AppComponent) { }

  ngOnInit(): void {

    this.appComponent.showFailed = 'collapse';
    this.appComponent.showSuccess = 'collapse';

    this.dataService.productDataService.getProducts()
    .subscribe((products: IProduct[]) => this.products = products);

  }

}
