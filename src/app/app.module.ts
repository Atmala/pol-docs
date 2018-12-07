import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {Topnavbar} from "./components/topnavbar/topnavbar.component";
import {Navigation} from "./components/navigation/navigation.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {HomeComponent} from "./pages/home/home.component";
import { TestService } from './services/test.service';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire/questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Topnavbar,
    HomeComponent,
    QuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
