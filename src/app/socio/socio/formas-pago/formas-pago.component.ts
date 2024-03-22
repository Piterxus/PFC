import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formas-pago',
  templateUrl: './formas-pago.component.html',
  styleUrls: ['./formas-pago.component.css']
})
export class FormasPagoComponent {
  tipoFormulario: string = '';
  mostrarTablas: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) { }

  mostrarFormulario(tipo: string) {
    console.log('tipo', tipo);
    this.tipoFormulario = tipo;
    this.router.navigate([], { relativeTo: this.route, queryParams: { tipo: tipo }, queryParamsHandling: 'merge' });
    this.mostrarTablas = false;
  }

  volverATablas() {
    this.router.navigate([], { relativeTo: this.route, queryParams: { tipo: null }, queryParamsHandling: 'merge' });
    this.mostrarTablas = true;
  }

}
