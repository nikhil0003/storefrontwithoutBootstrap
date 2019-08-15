import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {LoginService} from 'src/app/services/login.service';
import {AppConst} from 'src/app/constants/app-const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  private serverPath  = AppConst.serverPath;
  // tslint:disable-next-line: no-inferrable-types
  private loginError: boolean = false;
  private loggedIn = false;
  private credential = { 'username' : '', 'password' : ''};

  private emailSent: boolean = false;
  private usernameExists: boolean;
  private emailExists: boolean;
  private username: string;
  private email: string;

  private emailNotExists: boolean = false;
  private forgetPasswordEmailSent: boolean;
  // tslint:disable-next-line: no-trailing-whitespace
  // tslint:disable-next-line: typedef-whitespace
  private recoverEmail: string ;
  // tslint:disable-next-line: typedef-whitespace

  constructor(private  loginService : LoginService, private userService : UserService, private router : Router) {
   }

   onLogin() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
      res => {
        this.router.navigateByUrl('/home');
      }

    );
   }
   onNewAccount() {
    this.usernameExists = false;
  	this.emailExists = false;
    this.emailSent = false;
    this.userService.newUser(this.username, this.email).subscribe(
      res => {
        console.log(res);
  			this.emailSent = true;
      },err => {
        console.log(err.text());
        let errorMessage = err.text();
        if(errorMessage === 'usernameExists') {
          this.usernameExists = true;
        }
        if (errorMessage === 'emailExists') {
          this.emailExists = true;
        }

      }
    );
   }
   onForgetPassword() {
    console.log(this.recoverEmail);
   }
  ngOnInit() {
  }

}
