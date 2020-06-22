import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { ISupplier } from '../../shared/interfaces'
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: ISupplier[] = [];
  searchText: string;

  constructor(private dataService: DataService, private appComponent: AppComponent) { }

  ngOnInit(): void {

    this.appComponent.showFailed = 'collapse';
    this.appComponent.showSuccess = 'collapse';

    this.dataService.supplierDataService.getSuppliers()
    .subscribe((suppliers: ISupplier[]) => this.suppliers = suppliers);
  }

}
