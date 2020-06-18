import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/data.service';
import { IProduct, ISupplier } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {

  product: IProduct;
  suppliers: ISupplier[] = [];
  supplier: ISupplier;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
       this.dataService.getProduct(+params.get('id')).subscribe(prod =>{
          this.product = prod;
          this.dataService.getSupplier(this.product.supplierId).subscribe(sup => {
            this.supplier = sup;
          })
        })   
      })

      this.dataService.getSuppliers()
      .subscribe((suppliers: ISupplier[]) => this.suppliers = suppliers);
  }

  getSuppliers() {
    this.dataService.getSuppliers()
      .subscribe((suppliers: ISupplier[]) => this.suppliers = suppliers);
  }

  saveProduct() {

    this.product.supplierId = this.supplier.id;
    this.product.supplierName = this.supplier.name;
    
    if(this.product.id == 0)
    {
      this.product.id = this.dataService.productsDictionary.size + 1;
      this.dataService.addProduct(this.product);
    }
  }
}
