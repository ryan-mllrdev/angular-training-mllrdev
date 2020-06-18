import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/data.service';
import { IProduct } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {

  product: IProduct;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
       this.dataService.getProduct(+params.get('id')).subscribe(prod =>{
          this.product = prod;
        })   
      })
  }
}
