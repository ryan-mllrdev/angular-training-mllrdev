import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import { IProduct } from 'src/app/shared/interfaces';

@Component({
    selector: '',
    templateUrl: './product-delete.component.html'
})
export class ProductDeleteComponent implements OnInit{

    product:IProduct;

    constructor(private route: ActivatedRoute, private dataService: DataService) {
    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    confirmDelete() {
        this.route.paramMap.subscribe(params => {
      
            this.dataService.productDataService.getProduct(+params.get('id')).subscribe(prod =>{
               this.product = prod;
             })   
           })
    }
}