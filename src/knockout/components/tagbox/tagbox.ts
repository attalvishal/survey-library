import * as ko from "knockout";
import { ImplementorBase } from "src/knockout/kobase";
import { DropdownMultiSelectListModel } from "survey-core";

const template = require("./tagbox.html");

export var TagboxViewModel: any;

ko.components.register("sv-tagbox", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const q = params.question;
      const click = (_: any, e: any) => {
        q.dropdownListModel?.onClick(e);
      };
      const clear = (_: any, e: any) => {
        q.dropdownListModel?.onClear(e);
      };
      const keyhandler = (_: any, e: any) => {
        q.dropdownListModel?.keyHandler(e);
        return true;
      };
      const blur = (_: any, e: any) => {
        q.dropdownListModel?.onBlur(e);
      };
      const inputKeyHandler = (_: any, e: any) => {
        q.dropdownListModel?.inputKeyHandler(e);
        return true;
      };
      if (!q.dropdownListModel) {
        q.dropdownListModel = new DropdownMultiSelectListModel(q);
      }
      new ImplementorBase(q.dropdownListModel);
      return { question: q, model: q.dropdownListModel, click: click, clear: clear, keyhandler: keyhandler, blur: blur, inputKeyHandler: inputKeyHandler };
    },
  },
  template: template,
});
