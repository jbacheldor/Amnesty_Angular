import { Component, OnInit } from '@angular/core';
import {ACTIONES} from '../actions-list';
import {Action} from '../action';

@Component({
  selector: 'app-actionsquiz',
  templateUrl: './actionsquiz.component.html',
  styleUrls: ['./actionsquiz.component.css']
})
export class ActionsquizComponent implements OnInit {

  actiones = ACTIONES;
  selectedAction: Action;
  
  onNext(actiones){
    actiones.forEach(element => {
      console.log(actiones);
    });
  }
  constructor() { }

  ngOnInit() {
  }

}

