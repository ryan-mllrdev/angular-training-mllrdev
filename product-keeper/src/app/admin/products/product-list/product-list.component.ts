import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces';
import { DataService } from 'src/app/core/data.service';
import { ProductsComponent } from '../products.component';
import { ProductDataService } from 'src/app/core/product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

    constructor(private productDataService: ProductDataService) { }

    filteredProducts: IProduct[] = [];
    searchText: string;

    @Input () products: IProduct[];

    ngOnInit(): void {
    }

    confirmDelete(id: number) {
      this.productDataService.getProduct(id).subscribe(product => {
        if (product) {
          if (confirm(`Do you really wish to delete ${product.name}`)) {
            this.productDataService.deleteProduct(id);
            this.reload();
          }
        }
      });
    }

    private reload() {
      this.productDataService.getProducts().subscribe(products => {
        this.products = products;
      });
    }
}
