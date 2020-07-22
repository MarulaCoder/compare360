import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

	productsFound: Array<any> = [];
	selectedProduct: any;

	constructor() { }

	ngOnInit(): void {
	}

	provinces = [
		"Gauteng",
		"North-West",
		"Limpopo",
		"Mpumalanga",
		"Free State",
		"KwaZulu Natal",
		"Northern Cape",
		"Eastern Cape",
		"Western Cape"
	];

	providers: Array<any> = [
		{ 	id: 1, name: "Provider A", email: "e001@email.com", tel: "011 123 1234", viewed: 12, rating: 60,
			products: [
				{
					productname: "Product A", waiting: 3, premium: 99, rating: 40,
					benefits: [
						"Cover 10 children",
						"Cover 5 extended family",
						"R2500 Cash",
						"R200 Airtime",
						"R1000 Grocery",
						"Funeral Arrangement",
						"Free Cars"
					]
				}
			]
		},
		{ 	id: 2, name: "Provider B", email: "e002@email.com", tel: "011 123 1234", viewed: 22, rating: 60,
			products: [
				{
					productname: "Product B", waiting: 4, premium: 35, rating: 40,
					benefits: [
						"Cover 10 children",
						"Cover 5 extended family",
						"R2500 Cash",
						"R200 Airtime",
						"R1000 Grocery",
						"Funeral Arrangement",
						"Free Cars"
					]
				}
			]
		},
		{ 	id: 3, name: "Provider C", email: "e003@email.com", tel: "011 123 1234", viewed: 4, rating: 60,
			products: [
				{
					productname: "Product C", waiting: 6, premium: 199, rating: 40,
					benefits: [
						"Cover 10 children",
						"Cover 5 extended family",
						"R2500 Cash",
						"R200 Airtime",
						"R1000 Grocery",
						"Funeral Arrangement",
						"Free Cars"
					]
				}
			]
		},
		{ 	id: 4, name: "Provider D", email: "e001@email.com", tel: "011 123 1234", viewed: 7, rating: 60,
			products: [
				{
					productname: "Product D", waiting: 0, premium: 105, rating: 40,
					benefits: [
						"Cover 10 children",
						"Cover 5 extended family",
						"R2500 Cash",
						"R200 Airtime",
						"R1000 Grocery",
						"Funeral Arrangement",
						"Free Cars"
					]
				}
			]
		}
	];
	

	public createProvider(e: { id: number; name: string; email: string; tel: string; viewed: number; rating: number; products: { productname: string; waiting: number; premium: number; rating: number; benefits: string[]; }[]; }){
		this.providers.push(e);
	};

	public selectProvider(e: any){
		this.selectedProduct = e;
	};

	findSchemes()
	{

		
	};

	searchProducts()
	{
		this.productsFound.push(this.providers[0]);
		this.productsFound.push(this.providers[3]);
		this.productsFound.push(this.providers[2]);
	};
}
