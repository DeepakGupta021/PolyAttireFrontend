import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { DetailedProduct } from 'src/app/common/detailed-product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  imageList! : String[];
  currentImage! : String ;
  productDetailed : DetailedProduct = new DetailedProduct()
  sizeAndQuantityMap!:Map<String,number>;
  @ViewChild("quantityElement") quantityElement!: ElementRef;
  currentSize : string = 'Select Size';

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) {
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
        this.sizeAndQuantityMap =new Map(Object.entries(this.productDetailed.sizesAndQuantity));
      }
    )
  
  }

  public changeImage(src:String){
    this.productDetailed.displayImage=src;
  }

  public addToCart()
  {
    if(this.currentSize == 'Select Size')
    {
      alert("Please Select a Size");
      return;
    }
    console.log('Adding to cart'+this.productDetailed.title);
    const theCartItem = new CartItem(this.productDetailed,this.quantityElement.nativeElement.value,this.currentSize);
    this.cartService.addToCart(theCartItem);
  }

  public changeMaxQuantity(e:Event){
    this.currentSize = (<HTMLInputElement>e.target).value;
    this.quantityElement.nativeElement.value=1;
    this.quantityElement.nativeElement.max=this.sizeAndQuantityMap.get((<HTMLInputElement>e.target).value);
  }

}
