import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar' ;
import {MatFormFieldModule} from '@angular/material/form-field' ;
import { FormsModule } from '@angular/forms' ;
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input' ; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import {UserService} from './services/user.service';
import {LoginService} from './services/login.service';
import { HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs' ;


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FootbarComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [LoginService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
