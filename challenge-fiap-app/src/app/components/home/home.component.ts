import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  paciente;
  constructor(route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.paciente = JSON.parse(localStorage.getItem('autenticado') || '{}');
      if (Object.keys(this.paciente).length === 0) {
        this.paciente = undefined;
      }
    });
  }

  ngOnInit() {
    this.paciente = JSON.parse(localStorage.getItem('autenticado') || '{}');
    if (Object.keys(this.paciente).length === 0) {
      this.paciente = undefined;
    }
  }

  sairsistema() {
    this.paciente = undefined;
    localStorage.removeItem('autenticado');
  }
}
