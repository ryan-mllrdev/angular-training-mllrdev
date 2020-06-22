import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { IAddress } from '../../shared/interfaces';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: IAddress[] = [];
  searchText: string;

  constructor(private dataService: DataService, private appComponent: AppComponent) { }

  ngOnInit(): void {

    this.appComponent.showFailed = 'collapse';
    this.appComponent.showSuccess = 'collapse';

    this.dataService.locationDataService.getAddresses()
    .subscribe((locations: IAddress[]) => this.locations = locations);

  }

}
