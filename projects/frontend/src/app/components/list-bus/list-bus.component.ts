import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-bus',
  templateUrl: './list-bus.component.html',
  styleUrls: ['./list-bus.component.css']
})
export class ListBusComponent implements OnInit {

  
  busList;

  constructor(private authService: AuthService, private userService: UserService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadMybuses();
  }

  loadMybuses(){
   // this.busList = JSON.parse(localStorage.getItem("BUSES_AVAILABLE")) || [];
   this.userService.getAllBuses().subscribe(res=>{
     this.busList=res;
   });

  }


  removebus(id){
   // console.log("delete bus ", busObj);

    let cfm = confirm("Do you want to delete bus ?");
    if(cfm){
      this.userService.deleteBus(id).subscribe(res=>{
        this.loadMybuses();
      });

      //Delete the record in the given index
    //  this.busList.splice(index,1);

     // localStorage.setItem("BUSES_AVAILABLE", JSON.stringify(this.busList));

      //Refresh Payees
     // this.loadMybuses();      
    }

  }
}

