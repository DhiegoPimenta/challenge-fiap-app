import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDadosRegistradosComponent } from './modal-dados-registrados.component';

describe('ModalDadosRegistradosComponent', () => {
  let component: ModalDadosRegistradosComponent;
  let fixture: ComponentFixture<ModalDadosRegistradosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDadosRegistradosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDadosRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
