import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailedProduct } from 'src/app/common/detailed-product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  imageList! : String[];
  currentImage! : String ;
  productDetailed : DetailedProduct = new DetailedProduct();



  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleProductDetailse();
    })
  }
  handleProductDetailse() {
    const theProductId: number = Number(this.route.snapshot.paramMap.get('id'));
    
    this.productService.getProduct(theProductId).subscribe(
      data=>{
        data.imageArray.push(data.displayImage);
        this.productDetailed=data;
      }
    )
  
  }

  public changeImage(src:String){
    this.productDetailed.displayImage=src;
  }

}
