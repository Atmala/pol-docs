import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { Test } from 'src/app/models/test.model';
import { PanelComponent } from '../../shared/panel/panel.component';
import { StepsWizardComponent } from '../steps-wizard/steps-wizard.component';

@Component({
  selector: 'poldoc-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  @ViewChild(PanelComponent)
  private containerPanel: PanelComponent;
  @ViewChild(StepsWizardComponent)
  private stepsWizard: StepsWizardComponent;

  private id: string;
  private quest: Test;

  constructor(
    private activatedRoute: ActivatedRoute,
    private qeustService: QuestionnaireService) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
      const data = this.qeustService.getTestById(this.id);
      data.subscribe((value: Test) => {
        this.quest = value;
        this.containerPanel.caption = value.name;
        this.stepsWizard.InitWithSteps(value.steps);
      });
    });
  }

}
