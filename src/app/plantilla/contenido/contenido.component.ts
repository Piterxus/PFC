import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/auth/token.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  name: string = this.capitalizeFirstLetter(localStorage.getItem('name') || 'Usuario');
  role = localStorage.getItem('role') || null;
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) { }
  logout() {

    this.tokenService.removeToken();

    this.router.navigate(['/login']);
  }
  private capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

}
