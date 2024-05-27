import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isBoxVisible=true;
  constructor() { }

  ngOnInit(): void {
  }
  hideShowBox(){
    this.isBoxVisible=!this.isBoxVisible;
}
}
