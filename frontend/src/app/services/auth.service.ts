import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/dacaUser/';
  

  login(user: any){
    return this.http.post(this.url + 'login', user);
  }
  isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
    }
  }
getUserTypeFromToken() {
  let token = localStorage.getItem('token');
  if (token) {
    let data = JSON.parse(atob(token.split('.')[1]));
    return data.about; 
  }
  return null;
}
getUserDataFromToken(){
  let token = localStorage.getItem('token');
  if(token){
    let data = JSON.parse(atob(token.split('.')[1]));
    return data;
  }
}
getById(id:any){
  return this.http.get(this.url + 'getById/'+id);
}




}
