import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() event!:Event;


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

  onActivate() {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 
     //or document.body.scrollTop = 0;
     //or document.querySelector('body').scrollTo(0,0)
 }

}
