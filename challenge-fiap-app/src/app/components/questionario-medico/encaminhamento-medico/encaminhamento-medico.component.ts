import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encaminhamento-medico',
  templateUrl: './encaminhamento-medico.component.html',
  styleUrls: ['./encaminhamento-medico.component.scss'],
})
export class EncaminhamentoMedicoComponent implements OnInit {

  paciente;
  constructor(private httpCliente: HttpClient, private router: Router) { }

  ngOnInit() {
    this.paciente = JSON.parse(localStorage.getItem('paciente') || '{}');
    let total = this.router.getCurrentNavigation().extras.state.soma;
    this.httpCliente.get('http://localhost:8080/api/anamnese/perguntas/verificar/' + total).subscribe(x => {

    });
  }

}
