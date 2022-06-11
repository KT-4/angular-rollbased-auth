import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private userSubject:any;
    public user:Observable<User>;


  constructor(
    private router:Router,
    private http:HttpClient
  ) { 
    const lstore:any = localStorage.getItem('user')
    this.userSubject = new BehaviorSubject(JSON.parse(lstore));
    this.user = this.userSubject.asObservable();
  }

  public get userValue():User{
    return this.userSubject.value
  }

  login(email:string,password:string ){
    return this.http.post<any>(`${environment.apiUrl}/login`,{email,password})
    .pipe(map(user => {
      localStorage.setItem('user',JSON.stringify(user));
      this.userSubject.next(user);
      return user;
    }))
  }

  logout(){
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login'])
  }
}


