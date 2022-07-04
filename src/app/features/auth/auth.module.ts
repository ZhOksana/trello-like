import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {MDBBootstrapModule} from "angular-bootstrap-md";




@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MDBBootstrapModule,
  ]
})
export class AuthModule { }
