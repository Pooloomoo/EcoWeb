import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form:FormGroup

  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private router:Router
    ) {
    this.form = this.fb.group({
      email:[''],
      password:['']
    })
  }

  submit():void{
    const {email,password} = this.form.value;
    this.authService.login(email,password).subscribe({
      next:() => {
        alert('login success!!!');
        this.router.navigate(['/home/unsigned']);
      },
      error:err => alert('login failed' + err.error)
    })
  }

  logout():void{
    this.authService.logout()
  }
}
