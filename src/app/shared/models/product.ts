export interface Product {
	id: string;
	productname: string;
	premium: number;
	description: string;
	waitingPeriod: number;
	upRating: number;
	downRating: number;
	benefits: Array<string>;
	provider: any;
  	//desc: string;
  	//price: number;
  	//updated: Date;
}