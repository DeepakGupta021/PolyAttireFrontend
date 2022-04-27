import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  imageList : String[] =['../assets/images/gallery-1.jpg','../assets/images/gallery-2.jpg','../assets/images/gallery-3.jpg','../assets/images/gallery-4.jpg'];
  currentImage! : String ;

  constructor() {
    this.currentImage=this.imageList[0];
   }

  ngOnInit(): void {
  }

  public changeImage(src:String){
    this.currentImage=src;
  }

}
