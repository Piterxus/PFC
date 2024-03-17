import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocioComponent } from './socio.component';
import { MiembrosFormComponent } from './socio-miembros/miembros-form/miembros-form.component';
import { AmarresFormComponent } from './socio-amarres/amarres-form/amarres-form.component';




@NgModule({
  declarations: [
    SocioComponent,
    MiembrosFormComponent,
    AmarresFormComponent

  ],
  imports: [
    CommonModule,
 
  ]
})
export class SocioModule { }
