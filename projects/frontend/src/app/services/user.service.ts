import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string;

  constructor(private http:HttpClient) {
    this.apiUrl= environment.API_URL;
   }


  getAllUsers(){
    let url= this.apiUrl +"/users";
    return this.http.get(url);
  }

  register(user){
    let url= this.apiUrl +"/users";
    return this.http.post(url,user);
    

  }
  getAllBuses(){
    let url= this.apiUrl +"/buses";
    return this.http.get(url);
  }
  addBuses(bus){
    let url= this.apiUrl +"/buses";
    return this.http.post(url,bus);
  }
  deleteBus(id){
    let url= this.apiUrl + "/buses" + "/" +id ;
    return this.http.delete(url);
  }
}
