import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isOpen = false;
    isDropdownOpen = false;
  
    constructor(
      private authService: AuthService
    ) {
    }
  
    get isLogin(): boolean {
      return this.authService.isLogin();
    }
  
    navLinks = [
      { name: 'Home', href: '/home/unsigned' },
      { name: 'What this for', href: '/explain' },
      { name: 'About Me', href: '/aboutme' },
      { name: 'Contact', href: '/contact' },
    ];
  
    userDropdownOptions = [
      { name: 'Profile', href: '/profile' },
      { name: 'My Experience', href: '/experience' },
      { name: 'Log In', href: '/login' },
    ];
  
    ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLogin => {
      if (isLogin) {
        this.navLinks = [
          { name: 'Home', href: '/home' },
          { name: 'What this for', href: '/explain' },
          { name: 'About Me', href: '/aboutme' },
          { name: 'Contact', href: '/contact' },
        ];
  
        this.userDropdownOptions = [
          { name: 'Profile', href: '/profile' },
          { name: 'My Experience', href: '/experience' },
          { name: 'Log Out', href: '/' },
        ];
      } else {
        this.navLinks = [
          { name: 'Home', href: '/home/unsigned' },
          { name: 'What this for', href: '/explain' },
          { name: 'About Me', href: '/aboutme' },
          { name: 'Contact', href: '/contact' },
        ];
  
        this.userDropdownOptions = [
          { name: 'Log In', href: '/login' },
        ];
      }
    });
  }
  
  
    logout():void{
      this.authService.logout();
    }

}
