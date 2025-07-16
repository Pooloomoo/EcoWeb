import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen = false;
  isDropdownOpen = false;

  navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'What this for', href: '/explain' },
    { name: 'About Me', href: '/aboutme' },
    { name: 'Contact', href: '/contact' },
  ];

  userDropdownOptions = [
    { name: 'Profile', href: '/profile' },
    { name: 'My Experience', href: '/experience' },
    { name: 'Logout', href: '/logout' },
  ];
}
