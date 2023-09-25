import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BreakefastService } from '../services/breakefast.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //
  template: `{{brekefast}}`,

})
export class HomeComponent implements OnInit {

  breakefast : any ;

  message : any;
 

  constructor(private http: HttpClient, private brakefastservice: BreakefastService,
    private route: ActivatedRoute) {

  }

  data : any;

  ngOnInit() {
    this.fetchProduct()
    // console.log(this.breakefast)

    this.message = this.route.snapshot.paramMap.get('message')
    

  }

  onproductFetch() {
    this.fetchProduct()
  }

  private fetchProduct (){
    this.brakefastservice.getBreakefast().subscribe({
      next:data=>{
        // console.log(data)
        this.breakefast = data;
        console.log(this.breakefast)
      }
      ,error:err=>{
        console.log(err)

      }
    })
  }

//

  

  

 
  

}
