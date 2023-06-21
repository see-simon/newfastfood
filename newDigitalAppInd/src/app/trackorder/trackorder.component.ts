import { Component } from '@angular/core';
// import { BreakefastService } from '../services/breakefast.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakefastService } from '../services/breakefast.service';
import { Breakefast } from '../models/breakefast';
import { Route } from '@angular/router';

@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.scss'],
  template: ` <button (click)="sendData()" >Make Order</button> `
})
export class TrackorderComponent {

  message : 'hello from the other side'

  constructor(private activateRoute : ActivatedRoute, private breakefastsevice : BreakefastService, private router: Router ){

  }

  values : any;

  sendData =()=>{
    this.router.navigate(['/home', this.message]);
  }

 


  

}
