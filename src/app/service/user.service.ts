import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get<User[]>(`${environment.apiUrl}/users`)
  }

  getUserById(id:string){
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`)
  }

  createNewUser(userData:any){
    return this.http.post(`${environment.apiUrl}/users`,userData)
  }

  deleteUserById(id:string){
    return this.http.delete(`${environment.apiUrl}/users/${id}`)
  }
}

 
  

