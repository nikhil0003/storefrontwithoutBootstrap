import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private loggedIn = false;
  keyword: string = '';
  constructor(
    private  loginService: LoginService
  ) { }
  callLogout(){
    this.loginService.logout().subscribe(
      res => {
        this.loggedIn = false;
        localStorage.clear();
      },
      err => {
        this.loggedIn = false;
        localStorage.clear();
      }
    );
  }
  onSearcyByTitle(){

  }
  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      err => {
        this.loggedIn = false;
      }
    );
  }

}
