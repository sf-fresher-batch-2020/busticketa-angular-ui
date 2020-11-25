import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bus',
  templateUrl: './list-bus.component.html',
  styleUrls: ['./list-bus.component.css']
})
export class ListBusComponent implements OnInit {

  
  busList;

  constructor() { }

  ngOnInit(): void {
    this.loadMybuses();
  }

  loadMybuses(){
    this.busList = JSON.parse(localStorage.getItem("BUSES_AVAILABLE")) || [];

  }

  removebus(busObj, index){
    console.log("delete bus ", busObj);

    let cfm = confirm("Do you want to delete bus ?");
    if(cfm){
      //Delete the record in the given index
      this.busList.splice(index,1);

      localStorage.setItem("BUSES_AVAILABLE", JSON.stringify(this.busList));

      //Refresh Payees
      this.loadMybuses();      
    }

  }
}

