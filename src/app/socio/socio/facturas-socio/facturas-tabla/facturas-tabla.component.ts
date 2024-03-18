import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturas-tabla',
  templateUrl: './facturas-tabla.component.html',
  styleUrls: ['./facturas-tabla.component.css']
})
export class FacturasTablaComponent {
  constructor(private router: Router) { } 

  verDetalle() {
    this.router.navigate(['/facturas/detalle-factura']);
  }
}
