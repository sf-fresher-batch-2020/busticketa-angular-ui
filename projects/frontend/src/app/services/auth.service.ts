import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string;
  constructor(private http:HttpClient) {
    this.apiUrl= environment .API_URL;
   }

  getLoggedInUser(){
   let url= this.apiUrl +"/loggedinuser";
    return this.http.get(url);
  }

  
 /* getLoggedInUserId(){
    let loggedInUser = this.getLoggedInUser();
    return loggedInUser ? loggedInUser.id : null;
  }*/

  logout(){
    localStorage.removeItem("LOGGED_IN_USER");
  }

  storeLoginDetails(loggedInUser){
    let url= this.apiUrl +"/loggedinuser";
    return this.http.post(url,loggedInUser);
  }
}

