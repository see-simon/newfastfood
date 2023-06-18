import { Component } from '@angular/core';
// import { BreakefastService } from '../services/breakefast.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.scss']
})
export class TrackorderComponent {

  values : any;

  constructor(private activateRoute : ActivatedRoute){

  }

  ngOnInit (){

    this.activateRoute.paramMap.subscribe(paramMap=>{
      this.values = paramMap.get('values')
      console.log(this.values)
    })
  
  }

  

}
