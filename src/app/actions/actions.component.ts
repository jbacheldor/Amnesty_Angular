import { Component, OnInit, NgModule } from '@angular/core';
import {ACTIONES} from '../actions-list';
import {Action} from '../action';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
@NgModule({
  imports: [
  ]
})
export class ActionsComponent implements OnInit {
	
	actiones = ACTIONES;
	selectedAction: Action;
	selected: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(act: Action): void{
	  this.selectedAction = act;
	  this.selectedAction.check = true;
	//  this.selected = !this.selected;
  }
  
  actionClicked(act: Action): void{
	  
  }

}
