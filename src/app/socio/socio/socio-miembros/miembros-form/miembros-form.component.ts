import { Component } from '@angular/core';

@Component({
  selector: 'app-miembros-form',
  templateUrl: './miembros-form.component.html',
  styleUrls: ['./miembros-form.component.css']
})
export class MiembrosFormComponent {
 parentescos = ['Padre', 'Madre', 'Hijo', 'Hija', 'Abuelo', 'Abuela', 'Tío', 'Tía', 'Conyuge', 'Sobrino', 'Sobrina'];

}
