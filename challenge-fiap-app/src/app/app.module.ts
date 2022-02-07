import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmergenciaComponent } from './components/emergencia/emergencia.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonLoaderService } from './shared/loader/loader.service';
import { JwtInterceptor } from './shared/interceptor/interceptor';
import { CommonModule } from '@angular/common';
import { EncaminhamentoComponent } from './components/encaminhamento/encaminhamento.component';
import { DadosPacienteComponent } from './components/dados-paciente/dados-paciente.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalDadosRegistradosComponent } from './components/dados-paciente/modal-dados-registrados/modal-dados-registrados.component';
import { QuestionarioMedicoComponent } from './components/questionario-medico/questionario-medico.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSliderModule } from '@angular/material/slider';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmergenciaComponent,
    EncaminhamentoComponent,
    DadosPacienteComponent,
    ModalDadosRegistradosComponent,
    QuestionarioMedicoComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxMaskModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatSliderModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IonLoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
