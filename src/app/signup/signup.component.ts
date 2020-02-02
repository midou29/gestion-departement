import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { User } from '../user';
import {LoginAuthService} from '../login-auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private authService :LoginAuthService) {

this.authService.isLoggedIn();
   }

  ngOnInit() {
  }
  saveUser(){
    this.user.enabled=true;
    this.userService.saveUser(this.user)
          .subscribe(data => console.log(data), error => console.log(error));
        this.user = new User();

  }

}
