import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ILocation } from 'src/app/shared/location-interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LocationDataService } from 'src/app/core/locations-data.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit, OnDestroy {

  locationForm: FormGroup;
  originalLocationValue: ILocation;
  changesApplied = false;

  @Input() location: ILocation;

  constructor(private formBuilder: FormBuilder, private locationDataService: LocationDataService) { }

  ngOnInit(): void {

    this.originalLocationValue = {
      ...this.location
    };

    this.locationForm = this.formBuilder.group({
      id: new FormControl(this.location?.id, [Validators.required]),
      name: new FormControl(this.location?.name, [Validators.required]),
    });
  }

  ngOnDestroy(): void {
    if  (!this.changesApplied)
    {
      this.locationDataService.updateLocation(this.originalLocationValue);
    }
  }

  saveLocation() {

    this.changesApplied = true;

    if (!this.location.id)
    {
      this.locationDataService.addLocation(this.location);

      this.locationForm.reset(this.originalLocationValue);
    }
    else {
      const location: ILocation = {
        ...this.location
      };

      this.locationDataService.updateLocation(location);
    }
  }

}
