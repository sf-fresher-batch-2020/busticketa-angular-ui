import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }  
  login(form:NgForm){
    let formData = form.value;
    console.log(formData);
    if(formData.email =="admin@gmail.com" && formData.password == "pass123"){
      let user = {id:1, name:"Paras", role:"ADMIN"};
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
      this.toastr.success("Welcome Admin");
     // window.location.href="/";
     window.location.href="add-bus.html";
     
      
    }
    else{
      this.toastr.error("Invalid Credentials");
    }
  }
}
