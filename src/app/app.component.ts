import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Role } from './_models/role';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-task-shine';

  user!:User;

    constructor(private authSevice:AuthService){
      this.authSevice.user.subscribe(x => this.user = x)
    }

    get isAdmin(){
      return this.user && this.user.role === Role.Admin;
    }

    logout(){
      this.authSevice.logout()
    }

}

