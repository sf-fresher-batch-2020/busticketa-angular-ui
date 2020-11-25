import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }
  
  way(routeObj){
    localStorage.setItem("ROUTE", JSON.stringify(routeObj));
  }
}
