import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsquizComponent } from './actionsquiz/actionsquiz.component';
import { HomeComponent} from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'actions', component: ActionsquizComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
