import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dados-paciente',
  templateUrl: './dados-paciente.component.html',
  styleUrls: ['./dados-paciente.component.scss'],
})
export class DadosPacienteComponent implements OnInit {

  form!: FormGroup;
  Data$ = [{
    pergunta: "Necessito de atendimento especial para pessoa com mobilidade reduzida"
  },
  {
    pergunta: "Necessito de atendimento especial para pessoa com deficiência auditiva"
  },
  {
    pergunta: "Necessito de atendimento especial para pessoa com deficiência visual"
  }];

  constructor(private fb: FormBuilder, private httpCliente: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(14)]],
      ultimo_nome: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      nome_mae: ['', Validators.required],
      checkArray: this.fb.array([])
    });

    this.form.get('cpf').valueChanges.subscribe(x => {
      if (x) {
        this.form.get('nome').setValue('');
        this.form.get('ultimo_nome').setValue('');
        this.form.get('data_nascimento').setValue('');
        this.form.get('nome_mae').setValue('');
        this.form.get('nome').setValidators(null);
        this.form.get('ultimo_nome').setValidators(null);
        this.form.get('data_nascimento').setValidators(null);
        this.form.get('nome_mae').setValidators(null);
        this.form.get('cpf').setValidators([Validators.required, Validators.minLength(14)]);
      }
    });

    this.form.get('nome').valueChanges.pipe(distinctUntilChanged()).subscribe(x => {
      if (x.length > 0) {
        this.form.get('cpf').setValue(null);
        this.form.get('cpf').setValidators(null);
        this.setarValidadores();
      }
    });
    this.form.get('ultimo_nome').valueChanges.pipe(distinctUntilChanged()).subscribe(x => {
      if (x.length > 0) {
        this.form.get('cpf').setValue(null);
        this.form.get('cpf').setValidators(null);
        this.setarValidadores();
      }
    });
    this.form.get('data_nascimento').valueChanges.pipe(distinctUntilChanged()).subscribe(x => {
      if (x.length > 0) {
        this.form.get('cpf').setValue(null);
        this.form.get('cpf').setValidators(null);
        this.setarValidadores();
      }
    });
    this.form.get('nome_mae').valueChanges.pipe(distinctUntilChanged()).subscribe(x => {
      if (x.length > 0) {
        this.form.get('cpf').setValue(null);
        this.form.get('cpf').setValidators(null);
        this.setarValidadores();
      }
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

  verificarPaciente() {
    let valores = this.form.getRawValue();
    let check = valores.checkArray.join();
    let data: any;
    localStorage.clear();

    if (valores.cpf) {
      this.httpCliente.get('http://localhost:8080/api/paciente/cpf/' + valores.cpf).subscribe(val => {
        data = val;
        data.existePaciente = true;
        data.check = check;
        localStorage.setItem('paciente', JSON.stringify(data));
      }, err => {
        data = valores;
        data.existePaciente = false;
        data.check = check;
        localStorage.setItem('paciente', JSON.stringify(data));
      });
    } else {
      this.httpCliente.post('http://localhost:8080/api/paciente/buscarPorOutrosDados', valores).subscribe(val => {
        data = val;
        data.existePaciente = true;
        data.check = check;
        localStorage.setItem('paciente', JSON.stringify(data));
      }, err => {
        data = valores;
        data.existePaciente = false;
        data.check = check;
        localStorage.setItem('paciente', JSON.stringify(data));
      });
    }
  }

  setarValidadores() {
    this.form.controls['nome'].addValidators([Validators.required, Validators.minLength(4)]);
    this.form.controls['ultimo_nome'].addValidators([Validators.required, Validators.minLength(4)]);
    this.form.controls['data_nascimento'].addValidators([Validators.required, Validators.minLength(10)]);
    this.form.controls['nome_mae'].addValidators([Validators.required, Validators.minLength(4)]);
    this.form.controls['nome'].updateValueAndValidity();
    this.form.controls['ultimo_nome'].updateValueAndValidity();
    this.form.controls['data_nascimento'].updateValueAndValidity();
    this.form.controls['nome_mae'].updateValueAndValidity();
  }

}
