import { Component, OnInit } from '@angular/core';
import { MlkapiService } from '../../mlkapi.service';

import { Product } from '../../models/product';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	products: Array<Product> = [];
	provinces: Array<any> = [];

	constructor(private mlkapiService: MlkapiService) { }

	ngOnInit(): void {
		/*
		this.mlkapiService.fetchProvinces().subscribe((data: any[])=>{  
			console.log(data);  
			this.provinces = data;  
		})
		*/
	}

	searchProducts(){
		this.mlkapiService.fetchProducts().subscribe((data: any[])=>{  
			console.log(data);  
			this.products = data;  
		})
	}
}
