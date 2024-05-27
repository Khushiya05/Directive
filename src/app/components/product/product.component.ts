import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit,OnDestroy{
  productName: string = "nokia";
  productId: string = "P-456";
  productStatus:string="Dispatched";
  isProductAvailable !:boolean;
  constructor() { }

  ngOnInit(): void {
    console.log('product is init')
    this.isProductAvailable=Math.random()>=.5 ?true:false
    console.log(this.isProductAvailable)
  }
  ngOnDestroy(): void {
    
  }
getbg(){
  return this.isProductAvailable?'orange':'#ededed'
}
}
