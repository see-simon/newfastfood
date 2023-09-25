import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Breakefast } from '../models/breakefast';
import { map } from 'rxjs';



const apiurl = 'http://localhost:3000/breakefast'


@Injectable({
  providedIn: 'root'
})
export class BreakefastService implements OnInit{

  allBreakefastProducts: Breakefast [] = [];

  

  constructor( private http: HttpClient) { }

  ngOnInit(){
    this.getBreakefast()
  }

  onBreakefastFetch(){
    this.getBreakefast()
  }



  //get breake fast

    getBreakefast(){

  return this.http.get(apiurl)
      

    }

}

