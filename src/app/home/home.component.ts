import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { User } from '../_models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false;
  user!:User;
  userFromApi!:any
  constructor(
     private userService:UserService,
     private authService:AuthService
  ) {
    this.user = this.authService.userValue;
    console.log(this.user)
   }

  ngOnInit(): void {
    this.userService.getUserById(this.user._id).subscribe((user) => {
      this.userFromApi = user
      console.log(user)
    })
  }

}
