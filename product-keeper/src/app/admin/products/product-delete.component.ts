import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import { IProduct } from 'src/app/shared/interfaces';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-product-delete',
    templateUrl: './product-delete.component.html'
})
export class ProductDeleteComponent implements OnInit{

    product:IProduct;
    disabled:boolean = false;

    constructor(private appComponent: AppComponent, private route: ActivatedRoute, private dataService: DataService) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
      
            this.dataService.productDataService.getProduct(+params.get('id')).subscribe(prod =>{
               this.product = prod;
             })   
           })
    }

    confirmDelete() {
        this.dataService.productDataService.deleteProduct(this.product.id);
        this.appComponent.message = 'Product successfully deleted.';
        this.appComponent.showFailed = 'collapse';
        this.appComponent.showSuccess = 'visible';
        this.disabled = true;//Disable button after delete.
    }
}