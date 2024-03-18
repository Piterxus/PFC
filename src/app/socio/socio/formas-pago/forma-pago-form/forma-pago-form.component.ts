import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forma-pago-form',
  templateUrl: './forma-pago-form.component.html',
  styleUrls: ['./forma-pago-form.component.css']
})
export class FormaPagoFormComponent {
  @Input() tipo: string = '';
  @Output() volver: EventEmitter<void> = new EventEmitter<void>();
  // @Output() volver = new EventEmitter<boolean>();

  constructor() { }

  volverATablas() {
    this.volver.emit();
  }
}
