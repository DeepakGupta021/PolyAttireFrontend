import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string = 'http://localhost:8080/api/getAllProducts';

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId:number) : Observable<Product[]>{
    
    var searchUrl  = this.baseUrl;

    if(theCategoryId!=null)
    {
      searchUrl = searchUrl+'/'+theCategoryId;
    }
    
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response=>response.products)
    );
  }
}

interface GetResponse{
  products:Product[];
}
