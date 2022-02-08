import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncaminhamentoMedicoComponent } from './encaminhamento-medico.component';

describe('EncaminhamentoMedicoComponent', () => {
  let component: EncaminhamentoMedicoComponent;
  let fixture: ComponentFixture<EncaminhamentoMedicoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EncaminhamentoMedicoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncaminhamentoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
