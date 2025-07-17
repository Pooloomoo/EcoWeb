import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
        { name: 'Home', href: '/home/unsigned' },
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
        { name: 'Home', href: '/home' },
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
