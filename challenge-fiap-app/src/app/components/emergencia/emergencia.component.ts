import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IonLoaderService } from '../../shared/loader/loader.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.component.html',
  styleUrls: ['./emergencia.component.scss'],
})
export class EmergenciaComponent implements OnInit {

  Data$: Observable<any> | undefined;
  form: FormGroup;

  constructor(private fb: FormBuilder, private httpCliente: HttpClient, public router: Router, private ionLoaderService: IonLoaderService) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    });
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
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

  submitForm() {
    let valores = this.form.value.checkArray.map(i => Number(i));
    const sum = valores.reduce((partialSum, a) => partialSum + a, 0);

    this.router.navigateByUrl('/encaminhamento', { state: { soma: sum } });
  }

  ngOnInit() {
    this.Data$ = this.httpCliente.get('http://localhost:8080/api/emergencia/perguntas');
  }

}
