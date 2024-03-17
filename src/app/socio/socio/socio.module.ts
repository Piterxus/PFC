import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocioComponent } from './socio.component';
import { MiembrosFormComponent } from './socioMiembros/miembros-form/miembros-form.component';



@NgModule({
  declarations: [
    SocioComponent,
    MiembrosFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SocioModule { }
