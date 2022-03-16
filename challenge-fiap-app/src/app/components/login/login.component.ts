import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EmergenciaComponent } from '../emergencia/emergencia.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private httpCliente: HttpClient, private _snackBar: MatSnackBar,
    public router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  logar() {
    let valores = this.form.getRawValue();

    this.httpCliente.post('http://localhost:8080/authenticate', valores).subscribe(val => {
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
