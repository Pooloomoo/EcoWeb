import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { AdminRoutingModule } from "../../feature/admin/admin-routing/admin-routing.module";

@Component({
  selector: 'app-auth-layout',
  imports: [NavbarComponent, AdminRoutingModule,RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
