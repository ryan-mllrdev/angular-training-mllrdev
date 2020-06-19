import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import { ISupplier } from 'src/app/shared/interfaces';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-supplier-delete',
    templateUrl: './supplier-delete.component.html'
})
export class SupplierDeleteComponent implements OnInit{

    supplier:ISupplier;
    disabled:boolean = false;

    constructor(private appComponent: AppComponent, private route: ActivatedRoute, private dataService: DataService) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
      
            this.dataService.supplierDataService.getSupplier(+params.get('id')).subscribe(sup =>{
               this.supplier = sup;
             })   
           })
    }

    confirmDelete() {
        this.dataService.supplierDataService.deleteSupplier(this.supplier.id);
        this.appComponent.message = 'Supplier successfully deleted.';
        this.appComponent.showFailed = 'collapse';
        this.appComponent.showSuccess = 'visible';
        this.disabled = true;//Disable button after delete.
    }
}