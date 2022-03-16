import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmergenciaComponent } from './components/emergencia/emergencia.component';
import { EncaminhamentoComponent } from './components/encaminhamento/encaminhamento.component';
import { DadosPacienteComponent } from './components/dados-paciente/dados-paciente.component';
import { QuestionarioMedicoComponent } from './components/questionario-medico/questionario-medico.component';
import { EncaminhamentoMedicoComponent } from './components/questionario-medico/encaminhamento-medico/encaminhamento-medico.component';
import { MapaEncaminhamentoComponent } from './components/mapa-encaminhamento/mapa-encaminhamento.component';
import { AgendarConsultaComponent } from './components/agendar-consulta/agendar-consulta.component';
import { LocalizarComponent } from './components/localizar/localizar.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'emergencia',
    component: EmergenciaComponent
  },
  {
    path: 'encaminhamento',
    component: EncaminhamentoComponent
  },
  {
    path: 'dados-paciente',
    component: DadosPacienteComponent
  },
  {
    path: 'questionario-medico',
    component: QuestionarioMedicoComponent
  },
  {
    path: 'encaminhamento-medico',
    component: EncaminhamentoMedicoComponent
  },
  {
    path: 'mapa-encaminhamento',
    component: MapaEncaminhamentoComponent
  },
  {
    path: 'agendar-consulta',
    component: AgendarConsultaComponent
  },
  {
    path: 'localizar',
    component: LocalizarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
