import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miembros-form',
  templateUrl: './miembros-form.component.html',
  styleUrls: ['./miembros-form.component.css']
})
export class MiembrosFormComponent {
 parentescos = ['Padre', 'Madre', 'Hijo', 'Hija', 'Abuelo', 'Abuela', 'Tío', 'Tía', 'Cónyuge', 'Sobrino', 'Sobrina'];
 constructor(private router: Router) { }

 volver() {
    this.router.navigate(['/miembros']);
  }

}
