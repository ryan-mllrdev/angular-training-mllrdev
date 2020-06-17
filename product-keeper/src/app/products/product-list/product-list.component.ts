import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  filteredProducts: IProduct[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  @Input () products: IProduct[];

}
