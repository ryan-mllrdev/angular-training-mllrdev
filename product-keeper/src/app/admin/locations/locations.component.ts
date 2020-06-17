import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { IAddress } from '../../shared/interfaces';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: IAddress[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getAddresses()
    .subscribe((locations: IAddress[]) => this.locations = locations);

  }

}
