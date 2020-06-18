import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

    filteredProducts: IProduct[] = [];
    searchText: string;

    constructor() { }

    ngOnInit(): void {
    }

    @Input () products: IProduct[];
}
