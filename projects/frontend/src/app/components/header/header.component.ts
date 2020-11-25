import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInUser;
  constructor(private authService: AuthService) { 
    this.loggedInUser = this.authService.getLoggedInUser();
  }

  // Before login, loggedInUser = null
  // After login, loggedInUser = { id: 1, name:"Naresh"}
  ngOnInit(): void {

  /*  this.loggedInUser = this.authService.getLoggedInUser();
    console.log("LoggedInUser", this.loggedInUser);*/
    
  }

  logout() {
    this.authService.logout();
  }
}