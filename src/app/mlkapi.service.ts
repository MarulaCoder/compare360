import {catchError, retry, tap, map } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Product } from './shared/models/product';
import { Observable, of } from 'rxjs';
import { Province } from './shared/models/province';

export interface Todo {
	id?: any;
	createdAt?: number;
	value: string;
}

@Injectable({
  	providedIn: 'root'
})
export class MlkapiService {
  	private SERVER_URL: string = "http://localhost:3000/api";
  
  	constructor(private httpClient: HttpClient) { }

  	getAllProvinces(): Observable<Province[]> {
		let apiUrl = `${this.SERVER_URL}/provinces`;
		return this.httpClient.get<Province[]>(apiUrl)
		.pipe(
			tap(provinces => console.log('fetched provinces')),
			catchError(this.handleError<Province[]>('provinces', []))
		);
  	}

  	getAllProducts(): Observable<Product[]> {
		let apiUrl = `${this.SERVER_URL}/products`;
		return this.httpClient.get<Product[]>(apiUrl)
		.pipe(
			tap(products => console.log('fetched products')),
			catchError(this.handleError<Product[]>('products', []))
		);
  	}

	searchProductsByPremium(premium: number): Observable<Product[]> {
		let apiUrl = `${this.SERVER_URL}/products/search/${premium}`;
		return this.httpClient.get<Product[]>(apiUrl)
		.pipe(
			tap(_ => console.log(`fetched products with premium=${premium}`)),
			catchError(this.handleError<any>(`searchProductsByPremium premium=${premium}`))
		);
	}

  	private handleError<T>(operation = 'operation', result?: T) {
    	return (error: any): Observable<T> => {
      	console.error(error);
      	this.log(`${operation} failed: ${error.message}`);
  
      	return of(result as T);
    	};
  	}
  
  	private log(message: string) {
    	console.log(message);
  	}

}
