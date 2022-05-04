import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductService } from './services/product.service';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
   {path: 'products/:id', component: ProductDetailComponent},
   {path: 'category/:id', component: ProductsComponent,data:{pageSize:12}},
   {path: 'category',component:ProductsComponent,data:{pageSize:12}},
   {path: 'home',component:HomeComponent},
   {path: '',redirectTo:'/home',pathMatch:'full'},
   {path: '**', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  

}
