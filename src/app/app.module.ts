import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionsComponent } from './actions/actions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatCheckboxModule, 
  MatListModule, 
  MatCardModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ActionsquizComponent } from './actionsquiz/actionsquiz.component';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ActionsquizComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
