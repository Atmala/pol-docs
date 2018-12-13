import { Component, OnInit, Input } from '@angular/core';
import { Step } from 'src/app/models/step.model';

@Component({
  selector: 'poldoc-steps-wizard',
  templateUrl: './steps-wizard.component.html',
  styleUrls: ['./steps-wizard.component.scss']
})
export class StepsWizardComponent {
  private steps: Step[];
  currentStep: Step;

  constructor() { }

  public InitWithSteps(steps: Step[]) {
    this.steps = steps;
    this.currentStep = steps[0];
  }

}
