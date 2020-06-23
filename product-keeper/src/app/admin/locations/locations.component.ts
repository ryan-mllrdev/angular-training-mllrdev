import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ILocation } from 'src/app/shared/location-interface';
import { LocationDataService } from 'src/app/core/locations-data.service';
import { SuppliersDataService } from 'src/app/core/suppliers-data.service';
import { ProductDataService } from 'src/app/core/product-data.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: ILocation[] = [];

  constructor(private locationDataService: LocationDataService)
    {
    }

  ngOnInit(): void {

    this.locationDataService.getLocations()
    .subscribe((locations: ILocation[]) => this.locations = locations);

  }

}
