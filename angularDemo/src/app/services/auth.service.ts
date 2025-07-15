import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  private user_API:string = 'http://localhost:9000/api/user/';
  
  login(email:string,password:string){
    return this.http.post<{token:string}>(`${this.user_API}login`,{email,password})
    .pipe(tap(res => localStorage.setItem('token',res.token)))
  }

  logout():void{
    localStorage.removeItem('token');
  }

  getToken():string | null{
    return localStorage.getItem('token');
  }

  isLogin():boolean{
    return !!this.getToken();
  }
}
