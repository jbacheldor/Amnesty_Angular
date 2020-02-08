import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsquizComponent } from './actionsquiz/actionsquiz.component';
import { HomeComponent } from './home/home.component'
import { ErrorPageComponent } from './error-page/error-page.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'actions', component: ActionsquizComponent},
  { path: 'error', component: ErrorPageComponent},
  { path: '**', redirectTo: 'error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
