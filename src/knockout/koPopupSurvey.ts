import * as ko from "knockout";
import { SurveyModel, PopupSurveyModel } from "survey-core";
import { ImplementorBase } from "./kobase";
var koTemplate = require("html-loader?interpolate!val-loader!./templates/window/window.html");

export class PopupSurveyImplementor extends ImplementorBase {
  constructor(public window: PopupSurveyModel) {
    super(window);
    this.window.showingChangedCallback = () => {
      this.doShowingChanged();
    };
    (<any>this.window)["doExpand"] = () => {
      this.window.changeExpandCollapse();
    };
  }
  private doShowingChanged() {
    const windowElement = this.window.windowElement;
    if (this.window.isShowing) {
      windowElement.innerHTML = this.template;
      ko.cleanNode(windowElement);
      ko.applyBindings(this.window, windowElement);
      document.body.appendChild(windowElement);
      this.window.survey.render(PopupSurveyModel.surveyElementName);
    } else {
      document.body.removeChild(windowElement);
      windowElement.innerHTML = "";
    }
  }
  private get template(): string {
    return this.window.templateValue ? this.window.templateValue : koTemplate;
  }
}

PopupSurveyModel.prototype["onCreating"] = function() {
  this.implementor = new PopupSurveyImplementor(this);
};

export class PopupSurvey extends PopupSurveyModel {
  constructor(jsonObj: any, initialModel: SurveyModel = null) {
    super(jsonObj, initialModel);
  }
}

export class SurveyWindow extends PopupSurvey {
}