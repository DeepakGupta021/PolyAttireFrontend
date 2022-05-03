import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[];
  currentCategoryId!:number;
  previousCategoryId!: number;


  //new props for pagination & sort
  thePageNumber:number = 1;
  thePageSize: number = 4;
  theTotalElements:number = 0;
  sortBy:string = 'id';
 
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      console.log(data['pageSize']);
      this.thePageSize=data['pageSize'];
    });
    this.route.paramMap.subscribe(()=>{
      this.listProducts();
    });
  }

  listProducts(){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });

    //checking if category id exists
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCategoryId = Number(this.route.snapshot.paramMap.get('id'));
    }
    if(this.previousCategoryId != this.currentCategoryId){
      this.thePageNumber =1;
    }
    
    this.previousCategoryId=this.currentCategoryId;

    this.productService.getProductListPaginate(this.thePageNumber - 1,
                                              this.thePageSize,
                                              this.currentCategoryId).subscribe(this.processResult());
  }

  processResult(){
    return (data: { products: Product[]; page: { number: number; size: number; totalElements: number; }; })=>{
      this.products = data.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements =  data.page.totalElements;
    }
  }

}
