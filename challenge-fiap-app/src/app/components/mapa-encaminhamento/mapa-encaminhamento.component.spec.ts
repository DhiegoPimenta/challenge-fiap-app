import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaEncaminhamentoComponent } from './mapa-encaminhamento.component';

describe('MapaEncaminhamentoComponent', () => {
  let component: MapaEncaminhamentoComponent;
  let fixture: ComponentFixture<MapaEncaminhamentoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaEncaminhamentoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaEncaminhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
