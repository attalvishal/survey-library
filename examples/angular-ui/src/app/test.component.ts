import { ChangeDetectorRef, Component } from "@angular/core";
import { SurveyModel, StylesManager } from "survey-core";
import * as Survey from "survey-core";

@Component({
  selector: "test",
  template: "<router-outlet></router-outlet>",
})
export class TestComponent {
  public model?: SurveyModel;
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    (window as any).Survey = Survey;
    (<any>window).setSurvey = (survey: SurveyModel) => {
      this.model = survey;
      this.changeDetectorRef.detectChanges();
    }
  }
}
