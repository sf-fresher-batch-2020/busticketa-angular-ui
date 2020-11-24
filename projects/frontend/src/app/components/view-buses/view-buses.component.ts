import { Component, OnInit } from '@angular/core';

import { ViewBusesService } from '../../services/view-buses.service';

@Component({
  selector: 'app-view-buses',
  templateUrl: './view-buses.component.html',
  styleUrls: ['./view-buses.component.css']
})
export class ViewBusesComponent implements OnInit {
buses;
  constructor( private viewbus: ViewBusesService) { }

  ngOnInit(): void {
    this.listbus();
  }

  listbus(){
    this.buses = this.viewbus.getbuses();
  }

}
