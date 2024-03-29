import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/auth/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantilla-guardamuelles',
  templateUrl: './plantilla-guardamuelles.component.html',
  styleUrls: ['./plantilla-guardamuelles.component.css']
})
export class PlantillaGuardamuellesComponent {


  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) { }

  logout() {

    this.tokenService.removeToken();

    this.router.navigate(['/login']);
  }

}
