import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { UserService } from '../service/user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users:User[]= []
  constructor(private userService:UserService) { }
   

  ngOnInit(): void {
    this.userService.getUser().pipe(first()).subscribe( users =>{
        this.users = users
      }
    )
  }

}
