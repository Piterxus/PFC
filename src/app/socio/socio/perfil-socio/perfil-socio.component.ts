import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/services/data-layer.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-perfil-socio',
  templateUrl: './perfil-socio.component.html',
  styleUrls: ['./perfil-socio.component.css']
})
export class PerfilSocioComponent implements OnInit {

  constructor(private _router: Router, private dataLayer: DataLayerService) { 

    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.dataLayer.logPaweView(event.url);
        console.log(event.url);
      }
    });

  }

  ngOnInit(): void {
    // this.dataLayer.logPaweView('perfil_socio');
    console.log('perfil_socio');
  }

}
