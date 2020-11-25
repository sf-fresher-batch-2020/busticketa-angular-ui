import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

import { ViewBusesService } from '../../services/view-buses.service';

@Component({
  selector: 'app-view-buses',
  templateUrl: './view-buses.component.html',
  styleUrls: ['./view-buses.component.css']
})
export class ViewBusesComponent implements OnInit {
buses;
  constructor( private userService: UserService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadMybuses();
  }

  loadMybuses(){
    // this.busList = JSON.parse(localStorage.getItem("BUSES_AVAILABLE")) || [];
    this.userService.getAllBuses().subscribe(res=>{
      this.buses=res;
    });
 
   }

}
