import { Component, OnInit } from '@angular/core';
import { DataService } from './core/data.service';
import { LocationDataService } from './core/locations-data.service';
import { SuppliersDataService } from './core/suppliers-data.service';
import { ProductDataService } from './core/product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title: string;

  constructor(){}

  ngOnInit(): void {
  }
}
