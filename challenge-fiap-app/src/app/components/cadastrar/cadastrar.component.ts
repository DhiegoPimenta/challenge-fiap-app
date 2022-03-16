import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EmergenciaComponent } from '../emergencia/emergencia.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {
  form!: FormGroup;
  isPaciente = false;
  constructor(private fb: FormBuilder, private httpCliente: HttpClient, private _snackBar: MatSnackBar,
    public router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]]
    });
  }
  modo(e) {
    if (e == 3) {
      this.isPaciente = true;
    } else {
      this.isPaciente = false;
    }
  }

  cadastrar() {
    let valores = this.form.getRawValue();

    this.httpCliente.post('http://localhost:8080/register', valores).subscribe(val => {
      if (val) {
        localStorage.setItem('autenticado', JSON.stringify(val));
        this.router.navigate(['/']);
      }
    }, err => {
      this._snackBar.open('Ops... tente novamente mais tarde.', '', {
        duration: 3000
      });
    });
  }
}
