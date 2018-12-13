import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire/questionnaire.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PanelComponent } from './shared/panel/panel.component';
import { StepsWizardComponent } from './questionnaire/steps-wizard/steps-wizard.component';


@NgModule({
  declarations: [
    NavigationComponent,
    TopnavbarComponent,
    QuestionnaireComponent,
    PanelComponent,
    StepsWizardComponent
  ],
  exports: [
    NavigationComponent,
    TopnavbarComponent,
    QuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
})
export class ComponentsModule { }
