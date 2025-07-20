import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private user_API: string = 'http://localhost:9000/api/user/';

  private loginStatus = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn$ = this.loginStatus.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.user_API}login`, { email, password })
      .pipe(tap(res => {
        localStorage.setItem('token', res.token)
        this.loginStatus.next(true);
      }))
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLogin(): boolean {
    return !!this.getToken();
  }

  getUserRole(): string {
  // กรณี role เก็บใน JWT token
  const token = localStorage.getItem('token');
  if (!token) return '';
  
  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.role; // สมมุติใน JWT มี field ชื่อ role
}
}
