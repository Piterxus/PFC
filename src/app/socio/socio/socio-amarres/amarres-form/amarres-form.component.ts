import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amarres-form',
  templateUrl: './amarres-form.component.html',
  styleUrls: ['./amarres-form.component.css']
})
export class AmarresFormComponent {
  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['/amarres-socio']);
  }
}
