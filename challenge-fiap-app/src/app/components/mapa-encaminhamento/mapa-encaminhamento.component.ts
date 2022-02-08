import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-encaminhamento',
  templateUrl: './mapa-encaminhamento.component.html',
  styleUrls: ['./mapa-encaminhamento.component.scss'],
})
export class MapaEncaminhamentoComponent implements OnInit {
  lat;
  lng;
  origin: any;
  destination: any;
  constructor() { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.origin = { lat: position.coords.latitude, lng: position.coords.longitude };
      }, err => {
          this.origin = { lat: -30.0250791, lng: -51.2084876 };
        });
    }
    this.destination = { lat: -30.0250791, lng: -51.2084876 };
  }

}
