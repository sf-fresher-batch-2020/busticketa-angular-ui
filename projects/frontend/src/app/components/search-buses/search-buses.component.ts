import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RouteService } from '../../services/route.service';


@Component({
  selector: 'app-search-buses',
  templateUrl: './search-buses.component.html',
  styleUrls: ['./search-buses.component.css']
})
export class SearchBusesComponent implements OnInit {
  source : string;
  destination : string;
  date : any;
  route;
 


  constructor(private router:Router , private toaster: ToastrService, private  routeService:RouteService) { }


  ngOnInit(): void {
    
  }
  buses(){
    let routeObj=  {  source: this.source , destination: this.destination , date: this.date};
    console.log(routeObj);
    this.routeService.way(routeObj);
    this.router.navigate(['view-buses']);
  }

}
