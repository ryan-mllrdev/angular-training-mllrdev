import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/data.service';
import { IAddress } from 'src/app/shared/interfaces';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddressAddEditComponent implements OnInit {

  address: IAddress;
  disabled:boolean = true;

  constructor(private dataService: DataService, private route: ActivatedRoute, private appComponent: AppComponent) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
       this.dataService.locationDataService.getAddress(+params.get('id')).subscribe(addr =>{
          this.address = addr;
          this.detectChange();
        })   
      })
  }

  saveAddress() {

    this.appComponent.message = 'Address successfully updated.';
    
    if(this.address.id == 0)
    {
      this.address.id = this.dataService.locationDataService.locationsDictionary.size + 1;
      this.dataService.locationDataService.addAddress(this.address);
      this.appComponent.message = 'New address successfully added.';

      this.address = { id: 0, name: ''};
    }

    this.appComponent.showSuccess = 'visible';
    this.appComponent.showFailed = 'collapse';

    this.detectChange();
  }

  detectChange(){
    
    this.disabled = true;
    if(this.address.name)
    {
      this.disabled = false;
    }
  }
}
