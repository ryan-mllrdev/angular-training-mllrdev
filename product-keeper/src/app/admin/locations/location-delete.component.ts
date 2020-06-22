import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import { IAddress } from 'src/app/shared/interfaces';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-location-delete',
    templateUrl: './location-delete.component.html'
})
export class AddressDeleteComponent implements OnInit{

    address: IAddress;
    disabled = false;

    constructor(private appComponent: AppComponent, private route: ActivatedRoute, private dataService: DataService) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.dataService.locationDataService.getAddress(+params.get('id')).subscribe(addr =>{
               this.address = addr;
             }); });
    }

    confirmDelete() {
        this.dataService.locationDataService.deleteAddress(this.address.id);
        this.appComponent.message = 'Address successfully deleted.';
        this.appComponent.showFailed = 'collapse';
        this.appComponent.showSuccess = 'visible';
        this.disabled = true; // Disable button after delete.
    }
}