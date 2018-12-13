import { Component, OnInit, Input } from '@angular/core';
import { Step } from 'src/app/models/step.model';
import { Answer } from 'src/app/models/answer.model';

@Component({
  selector: 'poldoc-steps-wizard',
  templateUrl: './steps-wizard.component.html',
  styleUrls: ['./steps-wizard.component.scss']
})
export class StepsWizardComponent {
  private steps: Step[];
  currentIndex: number[] = [];
  currentStep: Step;

  constructor() { }

  public InitWithSteps(steps: Step[]) {
    this.steps = steps;
    this.currentIndex[0] = 0;
    this.currentStep = this.getNewCurrentStepFromTree();
  }

  onStepAction(answer: Answer, index: number) {
    if (answer.nextSteps && answer.nextSteps.length > 0) {
      this.currentIndex[this.currentIndex.length] = index;
      this.currentIndex[this.currentIndex.length] = 0;
     } else if (this.currentIndex.length >= 1) {
        this.currentIndex.splice(-1, 1);
        this.currentIndex[this.currentIndex.length - 1] += 1;
     }
     this.currentStep = this.getNewCurrentStepFromTree();
  }

  getNewCurrentStepFromTree(): Step {
    let currentLevelList: Step[] | Answer[];
    let it: any;
    currentLevelList = this.steps;
    let newStep: Step = null;
    this.currentIndex.forEach((item, index) => {
      if (index === this.currentIndex.length - 1) {
        newStep = currentLevelList[item] as Step;
      } else {
        it = currentLevelList[item];
        currentLevelList = it.nextSteps ? it.nextSteps : it.answers;
      }
    });

    return newStep;
  }
}
