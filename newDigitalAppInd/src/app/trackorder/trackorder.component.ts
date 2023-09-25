import { Component } from '@angular/core';
// import { BreakefastService } from '../services/breakefast.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakefastService } from '../services/breakefast.service';
import { Breakefast } from '../models/breakefast';
import { Route } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { response } from 'express';

@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.scss'],
  template: ` <button (click)="sendData()" >Make Order</button> `
})
export class TrackorderComponent {

  message : 'hello from the other side'

  constructor( private router: Router, private getBreakefast : BreakefastService, private products: ProductsService ){

  }

  breakefast : any ;



  // fetchProduct (){
  //   this.getBreakefast.getBreakefast().subscribe({
  //     next:data=>{
  //       // console.log(data)
  //       this.breakefast = data;
  //       console.log(this.breakefast, "breakefast data")
  //     }
  //     ,error:err=>{
  //       console.log(err)

  //     }
  //   })
  // }


  product : any;
  fetchProduct (){
    this.products.getBreakefast().subscribe({
      next:data=>{
        // console.log(data)
        this.product = data;
        console.log(this.product, " products are here")
      }
      ,error:err=>{
        console.log(err)

      }
    })
  }

  ngOnInit() {
    this.fetchProduct()
  
  }

 
}
