import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce2';
  clickedMenu : boolean = false;
  public clickMenu()
  {
    if(this.clickedMenu)
    {
      this.clickedMenu=false;
    }else{
      this.clickedMenu=true;
    }
  }
}
