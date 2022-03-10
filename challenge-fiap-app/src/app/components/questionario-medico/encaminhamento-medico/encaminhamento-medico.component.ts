import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encaminhamento-medico',
  templateUrl: './encaminhamento-medico.component.html',
  styleUrls: ['./encaminhamento-medico.component.scss'],
})
export class EncaminhamentoMedicoComponent implements OnInit {

  paciente = [];
  total;
  respondidas;
  respostaAnamnese;
  emergencia;
  constructor(private httpCliente: HttpClient, private router: Router) { }

  ngOnInit() {
    this.paciente = JSON.parse(localStorage.getItem('paciente') || '{}');
    this.total = this.router.getCurrentNavigation().extras.state.soma;
    this.respondidas = this.router.getCurrentNavigation().extras.state.anamnese_respondidas;
    this.httpCliente.get<any>('https://challenge-fiap.herokuapp.com/api/anamnese/perguntas/verificar/' + this.total).subscribe(x => {
      this.emergencia = x.texto + ' - nivel ' + x.emergencia;
    });
  }
  fazerCheckin() {
    let dados = [];
    dados.push(this.paciente);
    dados[0].emergencia = this.emergencia;
    dados[0].respondidas = this.respondidas.join();
    dados[0].data_checkin = new Date().toLocaleString();
    this.httpCliente.post<any>('https://challenge-fiap.herokuapp.com/fila/adicionar', dados[0]).subscribe(x => {
      this.router.navigateByUrl('/mapa-encaminhamento');
    });
  }
}
