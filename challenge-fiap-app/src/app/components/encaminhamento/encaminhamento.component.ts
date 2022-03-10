import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-encaminhamento',
  templateUrl: './encaminhamento.component.html',
  styleUrls: ['./encaminhamento.component.scss'],
})
export class EncaminhamentoComponent implements OnInit {

  state$: Observable<object>;
  total;
  emergencia;
  constructor(private router: Router, private httpCliente: HttpClient) { }

  ngOnInit() {
    this.total = this.router.getCurrentNavigation().extras.state.soma;
    this.httpCliente.get('https://challenge-fiap.herokuapp.com/api/emergencia/verificar/emergencia/' + this.total).subscribe(emergencia => {
      this.emergencia = emergencia;
    });
  }

}
