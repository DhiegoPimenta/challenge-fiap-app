import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmergenciaComponent } from './components/emergencia/emergencia.component';
import { EncaminhamentoComponent } from './components/encaminhamento/encaminhamento.component';
import { DadosPacienteComponent } from './components/dados-paciente/dados-paciente.component';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
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
