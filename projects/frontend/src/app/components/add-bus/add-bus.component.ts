import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  busList;

  provider:string;
  duration:number
  time:string;
  price:number;
  constructor(private authService: AuthService, private userService: UserService, private toastr: ToastrService,
    private router: Router)  { }

  ngOnInit(): void {
   // this.busList = JSON.parse(localStorage.getItem("BUSES_AVAILABLE")) || [];
  }
  addBus(form: NgForm){
    let bus= { Provider: this.provider,   Duration: this.duration,  Time: this.time , Price: this.price, AddedOn: new Date().toJSON() };
    console.log(bus);
    this.userService.addBuses(bus).subscribe(res => {
      console.log(res);

     
        //alert("Successfully Registered");     
        this.toastr.success("Successfully Added");

        //form.reset();
        this.router.navigate(['list-bus']);
     

   

    });


    //store in localstorage
   /* this.busList.push(bus);

    localStorage.setItem("BUSES_AVAILABLE", JSON.stringify(this.busList));

   
    this.toastr.success("Successfully Bus added");

    //this.router.navigate(['view-payees']);*/
  }



}