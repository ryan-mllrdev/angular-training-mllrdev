import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/data.service';
import { IAddress, ISupplier } from 'src/app/shared/interfaces';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class SupplierAddEditComponent implements OnInit {

  address: IAddress;
  addresses: IAddress[] = [];
  supplier: ISupplier;
  disabled:boolean = true;

  constructor(private dataService: DataService, private route: ActivatedRoute, private appComponent: AppComponent) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
       this.dataService.getSupplier(+params.get('id')).subscribe(sup =>{
          this.supplier = sup;
          this.dataService.getAddress(this.supplier.addressId).subscribe(addr => {
            this.address = addr;
            this.detectChange();
          })
        })   
      })

      this.dataService.getAddresses()
      .subscribe((addresses: IAddress[]) => this.addresses = addresses);
  }

  getAddresses() {
    this.dataService.getAddresses()
      .subscribe((addresses: IAddress[]) => this.addresses = addresses);
  }

  saveSupplier() {

    this.supplier.addressId = this.address.id;
    this.supplier.addressName = this.address.name;
    this.appComponent.message = 'Supplier successfully updated.';
    
    if(this.supplier.id == 0)
    {
      this.supplier.id = this.dataService.suppliersDictionary.size + 1;
      this.dataService.addSupplier(this.supplier);
      this.appComponent.message = 'New supplier successfully added.';

      this.supplier = { id: 0, name: '', addressName: '', addressId: 0};
    }

    this.appComponent.showSuccess = 'visible';
    this.appComponent.showFailed = 'collapse';

    this.detectChange();
  }

  detectChange(){
    
    this.disabled = true;
    if(this.supplier.name && this.address.id)
    {
      this.disabled = false;
    }
  }
}
