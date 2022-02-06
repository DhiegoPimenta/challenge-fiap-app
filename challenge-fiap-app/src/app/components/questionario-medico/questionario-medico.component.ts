import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionario-medico',
  templateUrl: './questionario-medico.component.html',
  styleUrls: ['./questionario-medico.component.scss'],
})
export class QuestionarioMedicoComponent implements OnInit {

  collection = [];

  constructor() {
    for (let i = 1; i <= 5; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  ngOnInit() { }

}
