import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DetailedProduct } from '../common/detailed-product';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl:string = 'https://polyattire-backend-3eaf149f29d4.herokuapp.com';
  private productsUrl:string= '/api/getAllProducts';
  private detailedProductsUrl:string = '/api/getproduct';

  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: number): Observable<DetailedProduct> {
    
    const productUrl = `${this.baseUrl}${this.detailedProductsUrl}/${theProductId}`;
    return this.httpClient.get<DetailedProduct>(productUrl);
  }


  getProductList(theCategoryId:number) : Observable<Product[]>{
    
    var searchUrl  = this.baseUrl+this.productsUrl;

    if(theCategoryId!=null)
    {
      searchUrl = searchUrl+'/'+theCategoryId;
    }
    
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response=>response.products)
    );
  }

  getProductListPaginate(thePage: number,
                         thePageSize: number,
                         theCategoryId:number) : Observable<GetResponseProducts>{
    
    var searchUrl  = this.baseUrl+this.productsUrl;

    if(theCategoryId!=null)
    {
      searchUrl = searchUrl+'/'+theCategoryId+`?page=${thePage}&size=${thePageSize}`;
    }else{
      searchUrl = searchUrl+`?page=${thePage}&size=${thePageSize}`;
    }
    
    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }
}

interface GetResponseProducts{
  products:Product[];
  page:{
    size:number,
    totalElements:number,
    totalPages:number,
    number:number,
  }
}
