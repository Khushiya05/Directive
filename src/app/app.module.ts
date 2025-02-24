import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { SkillsetsComponent } from './components/skillsets/skillsets.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    SkillsetsComponent,
  
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
