import { Component } from '@angular/core';
import {ACTIONES} from '../app/actions-list';
import {Action} from '../app/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amnesty International';

  actiones = ACTIONES;
  selectedAction: Action;
  
  onNext(actiones){
    actiones.forEach(element => {
      console.log(actiones);
    });
  }

}
