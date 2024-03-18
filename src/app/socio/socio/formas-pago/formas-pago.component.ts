import { Component } from '@angular/core';

@Component({
  selector: 'app-formas-pago',
  templateUrl: './formas-pago.component.html',
  styleUrls: ['./formas-pago.component.css']
})
export class FormasPagoComponent {
  tipoFormulario: string = '';
  mostrarTablas: boolean = true;

  constructor() { }

  mostrarFormulario(tipo: string) {
    this.tipoFormulario = tipo;
    this.mostrarTablas = false;
  }

  volverATablas() {
    this.mostrarTablas = true;
  }

}
