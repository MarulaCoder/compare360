import { Component, OnInit } from '@angular/core';
import { MlkapiService } from '../../mlkapi.service';

import { Product } from '../../shared/models/product';
import { Province } from '../../shared/models/province';
import { ProductSearch } from '../../shared/search/productsearch';
import { Observable, Subject } from 'rxjs';

import {
	tap,
	switchMap,
	debounceTime,
	distinctUntilChanged
  } from "rxjs/operators";

//import { SearchResult } from '../../models/searchresult'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	provinces$: Observable<Province[]>;
	products$: Observable<Product[]>;

	constructor(private mlkapiService: MlkapiService) { }

	ngOnInit(): void {
		this.mlkapiService.getAllProvinces().subscribe((data: any) => {  
			console.log(data);  
			this.provinces$ = data['provinces'];  
		});
		
	}

	getAllProducts(){
		this.mlkapiService.getAllProducts().subscribe((data: any)=>{  
			console.log(data);  
			this.products$ = data['products'];  
		})
	}

	searchProductsByPremium(){}


}
