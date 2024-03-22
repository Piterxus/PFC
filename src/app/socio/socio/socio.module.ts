import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocioComponent } from './socio.component';
import { MiembrosFormComponent } from './socio-miembros/miembros-form/miembros-form.component';
import { AmarresFormComponent } from './socio-amarres/amarres-form/amarres-form.component';
import { FacturasDetalleComponent } from './facturas-socio/facturas-detalle/facturas-detalle.component';
import { FacturasTablaComponent } from './facturas-socio/facturas-tabla/facturas-tabla.component';
import { NgxPrintModule } from 'ngx-print';
import { FormaPagoFormComponent } from './formas-pago/forma-pago-form/forma-pago-form.component';



@NgModule({
  declarations: [
    SocioComponent,
    MiembrosFormComponent,
    AmarresFormComponent,
   FacturasDetalleComponent,
    FacturasTablaComponent,
    FormaPagoFormComponent

  ],
  imports: [
    CommonModule,
    NgxPrintModule

  ],
  exports: [
  FormaPagoFormComponent
  ]
})
export class SocioModule { }
