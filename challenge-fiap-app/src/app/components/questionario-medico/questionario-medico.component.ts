import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-questionario-medico',
  templateUrl: './questionario-medico.component.html',
  styleUrls: ['./questionario-medico.component.scss'],
})
export class QuestionarioMedicoComponent implements OnInit {

  perguntas;
  Data$: Observable<any> | undefined;
  form: FormGroup;
  p: number = 1;

  constructor(private httpCliente: HttpClient,
    private fb: FormBuilder, public router: Router) {
    this.form = this.fb.group({
      checkArray1: this.fb.array([], [Validators.required]),
      checkArray2: ['', [Validators.required]],
      checkArray3: this.fb.array([], [Validators.required]),
      checkArray4: this.fb.array([], [Validators.required])
    });
  }

  ngOnInit() {
    this.httpCliente.get('http://localhost:8080/api/anamnese/perguntas/todos').subscribe(x => {
      this.perguntas = x;
      this.perguntas.push({});
    });
  }
  pageChanged(event) {
    if (event == 5) {
      console.log(this.form.getRawValue())
    }
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray' + this.p) as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  pitch(event: any) {
    this.form.get('checkArray2').setValue(event.value);
  }
}
