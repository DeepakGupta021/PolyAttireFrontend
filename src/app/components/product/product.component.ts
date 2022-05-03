import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() id!:Number;
  @Input() displayImage:String='./../assets/images/tshirt.jpg';
  @Input() title:String='default';
  @Input() price:number=0;
  


  constructor() { }

  ngOnInit(): void {
    this.displayImage="./../assets/images/"+this.displayImage;
    console.log(this.displayImage);

  }

}
