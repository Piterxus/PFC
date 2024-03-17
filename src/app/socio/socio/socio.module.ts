import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocioComponent } from './socio.component';
import { MiembrosFormComponent } from './socio-miembros/miembros-form/miembros-form.component';
import { AmarresFormComponent } from './socio-amarres/amarres-form/amarres-form.component';
import { FacturasDetalleComponent } from './facturas-socio/facturas-detalle/facturas-detalle.component';
import { FacturasTablaComponent } from './facturas-socio/facturas-tabla/facturas-tabla.component';




@NgModule({
  declarations: [
    SocioComponent,
    MiembrosFormComponent,
    AmarresFormComponent,
   FacturasDetalleComponent,
    FacturasTablaComponent

  ],
  imports: [
    CommonModule,

  ]
})
export class SocioModule { }
