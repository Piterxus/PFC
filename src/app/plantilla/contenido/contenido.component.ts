import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/services/auth/token.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  name: string = this.capitalizeFirstLetter(localStorage.getItem('name') || 'Usuario');
  role = localStorage.getItem('role') || null;
  routeName: any = null;
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService, private route: ActivatedRoute) { }
  logout() {

    this.tokenService.removeToken();

    this.router.navigate(['/login']);
  }
  private capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  ngOnInit(): void {
    this.routeName = this.route.snapshot.routeConfig?.path;
    if (this.routeName === 'panel') {
      this.routeName = 'Panel de control';
    }
    if (this.routeName === 'perfil') {
      this.routeName = 'Configurar perfil';
    }
    if (this.routeName === 'miembros') {
      this.routeName = 'Gestión miembros asociados';
    }
    if (this.routeName === 'amarres-socio') {
      this.routeName = 'Gestión de amarres';
    }


  }

}
