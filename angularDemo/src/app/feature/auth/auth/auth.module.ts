import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '../auth-routing/auth-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginComponent,
    RegisterComponent,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
