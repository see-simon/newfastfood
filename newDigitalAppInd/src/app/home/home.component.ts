import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BreakefastService } from '../services/breakefast.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private brakefastservice: BreakefastService) {

  }

  ngOnInit() {
    this.fetchProduct()
  }

  onproductFetch() {
    this.fetchProduct()
  }

  private fetchProduct (){
    this.brakefastservice.getBreakefast()
  }

}
