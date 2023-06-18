import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BreakefastService } from '../services/breakefast.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  breakefast : any ;
  //
    breakefastId;
    breakeF;
    
  //

  constructor(private http: HttpClient, private brakefastservice: BreakefastService) {

  }


  ngOnInit() {
    this.fetchProduct()
    // console.log(this.breakefast)

  }

  onproductFetch() {
    this.fetchProduct()
  }

  private fetchProduct (){
    this.brakefastservice.getBreakefast()
    .subscribe({
      next:data=>{
        // console.log(data)
        this.breakefast = data;
        //console.log(this.breakefast)
      }
      ,error:err=>{
        console.log(err)

      }
    })
  }

}
