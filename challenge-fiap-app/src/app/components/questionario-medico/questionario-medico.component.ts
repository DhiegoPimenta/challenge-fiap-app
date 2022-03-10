import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-questionario-medico',
  templateUrl: './questionario-medico.component.html',
  styleUrls: ['./questionario-medico.component.scss'],
})
export class QuestionarioMedicoComponent implements OnInit, OnDestroy {

  perguntas;
  Data$: Observable<any> | undefined;
  form: FormGroup;
  p: number = 1;
  lat;
  lng;
  respondidas = [];

  public origin: any;
  public destination: any;

  constructor(private httpCliente: HttpClient,
    private fb: FormBuilder, public router: Router) {
    this.form = this.fb.group({
      checkArray1: this.fb.array([], [Validators.required]),
      checkArray2: this.fb.array(['0'], [Validators.required]),
      checkArray3: this.fb.array([], [Validators.required]),
      checkArray4: this.fb.array([], [Validators.required])
    });
  }

  ngOnInit() {
    this.httpCliente.get('https://challenge-fiap.herokuapp.com/api/anamnese/perguntas/todos').subscribe(x => {
      this.perguntas = x;
      this.perguntas.push({});
    });
    this.router.events.subscribe((val) => {
      let rou = val instanceof NavigationEnd;
      if (rou == true) {
        this.p = 1;
        this.form.reset();
      }
    });
  }
  pageChanged(event) {
    if (event == 5) {
      let valores = this.form.getRawValue();
      let combinedArray = [];
      combinedArray.push(...valores.checkArray1);
      combinedArray.push(...valores.checkArray2);
      combinedArray.push(...valores.checkArray3);
      combinedArray.push(...valores.checkArray4);
      let total = combinedArray.map(i => Number(i));
      const sum = total.reduce((partialSum, a) => partialSum + a, 0);
      this.respondidas.push('dor intensidade: ' + valores.checkArray2 );
      this.router.navigate(['/encaminhamento-medico'], { state: { soma: sum, anamnese_respondidas: this.respondidas } });
    }
  }

  onCheckboxChange(e, i) {
    const checkArray: FormArray = this.form.get('checkArray' + this.p) as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
      this.respondidas.push(e.path[0].labels[0].innerText)
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          this.respondidas.splice(i, 1);
          return;
        }
        i++;
      });
    }
  }

  pitch(event: any) {
    this.form.get("checkArray2").setValue([event.value.toString()]);
  }

  ngOnDestroy(): void {
    this.p = 1;
    this.form.reset();
  }
}
