import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { ISupplier } from '../../shared/interfaces'

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: ISupplier[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getSuppliers()
    .subscribe((suppliers: ISupplier[]) => this.suppliers = suppliers);
  }

}
