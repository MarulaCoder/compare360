import {catchError, retry} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Product } from './models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MlkapiService {
  private SERVER_URL = "http://localhost:3000";
  
  constructor(private httpClient: HttpClient) { }

  public fetchProducts(){  
		return this.httpClient.get(`${this.SERVER_URL}/api/products`);  
  } 
  
  public fetchProvinces(){  
		return this.httpClient.get(`${this.SERVER_URL}/provinces`);  
  }
  
  getProducts(): Observable<HttpResponse<Product[]>> {
    return this.httpClient.get<Product[]>( this.SERVER_URL, { observe: 'response' });
  }

  getSmartphone(): Observable<any> {
    return this.httpClient.get<Product[]>(this.SERVER_URL).pipe(
      catchError(this.handleError<Product[]>('getSmartphone', [])));
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
