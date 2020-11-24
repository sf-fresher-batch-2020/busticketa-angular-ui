import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewBusesService {

  constructor() { }

  getbuses(){
    let data:any  = JSON.parse(localStorage.getItem("BUSES_AVAILABLE")) || [];
     return data;
  }

}
