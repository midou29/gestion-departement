import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {LoginAuthService} from '../login-auth.service';
import{Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public user: any={};
    constructor(private userService:UserService, private authService: LoginAuthService ,     private router: Router) {
  this.authService.isLoggedIn();
    }

    ngOnInit() {
    }

  loginUser(user:any){
    this.userService.loginUser(user)
          .subscribe((response) =>{
            if(response){
              if(response.token){
                localStorage.setItem('currentUser',JSON.stringify(response));
                if(response.user.role=='ADMIN'){
                  this.router.navigate(['/etudiants']);

                }


          











              }
            }








          })

  }

}
