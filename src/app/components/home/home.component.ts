import { Component, OnInit } from '@angular/core';
import { MlkapiService } from '../../mlkapi.service';

import { Product } from '../../shared/models/product';
import { Province } from '../../shared/models/province';

//import { SearchResult } from '../../models/searchresult'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	products: Array<Product> = [];
	provinces: Array<Province> = [];

	constructor(private mlkapiService: MlkapiService) { }

	ngOnInit(): void {
		
		this.mlkapiService.fetchProvinces().subscribe((data: any) => {  
			console.log(data);  
			this.provinces = data['provinces'];  
		})
		
	}

	searchProducts(){
		this.mlkapiService.getProducts().subscribe((data: any)=>{  
			console.log(data);  
			this.products = data.body['products'];  
		})
	}
}
