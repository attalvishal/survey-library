import { SurveyModel } from "../src/survey";
import { QuestionRatingModel } from "../src/question_rating";

export default QUnit.module("Survey");

QUnit.test("Survey widthMode property for startWithNewLine questions", function (assert) {
  var survey = new SurveyModel({
    pages: [
      {
        elements: [
          {
            type: "text",
            name: "name1",
          },
          {
            type: "text",
            name: "name2",
          },
          {
            type: "text",
            name: "name3",
          },
          {
            type: "text",
            name: "name4",
          },
        ],
      },
    ]
  });
  assert.equal(survey.widthMode, "auto");
  assert.equal(survey.calculateWidthMode(), "static", "calculate width for linear veritical survey");

  survey.getQuestionByName("name2").startWithNewLine = false;
  assert.equal(survey.calculateWidthMode(), "responsive", "calculate width 2 startWithNewLine");

  survey.getQuestionByName("name3").startWithNewLine = false;
  assert.equal(survey.calculateWidthMode(), "responsive", "calculate width 3 startWithNewLine");

  survey.widthMode = "static";
  assert.equal(survey.calculateWidthMode(), "static", "calculate width 3 startWithNewLine with static");

});

QUnit.test("Survey widthMode property for panel questions", function (assert) {
  var survey = new SurveyModel({
    widthMode: "auto",
    pages: [
      {
        "elements": [
          {
            "type": "panel",
            "elements": [
              {
                "type": "panel",
                "elements": [
                  {
                    "name": "q1",
                  }
                ],
                "name": "panel2"
              }, {
                "type": "panel",
                "elements": [
                  {
                    "name": "q3",
                  },
                  {
                    "name": "q4",
                  }
                ],
                "name": "panel1",
                "startWithNewLine": false
              }
            ],
            "name": "panel5",
          }
        ],
        "name": "page2"
      },
    ]
  });
  assert.equal(survey.calculateWidthMode(), "responsive", "calculate width for panel survey");
});

QUnit.test("Survey widthMode property for matrices questions", function (assert) {
  var survey3 = new SurveyModel({
    pages: [
      {
        "elements": [
          {
            "type": "matrix",
            "name": "question1",
            "columns": [
              "Column 1",
              "Column 2",
              "Column 3"
            ],
            "rows": [
              "Row 1",
              "Row 2"
            ]
          },
          {
            "type": "text",
            "name": "question2"
          }
        ]
      },
    ]
  });
  assert.equal(survey3.widthMode, "auto");
  assert.equal(survey3.calculateWidthMode(), "responsive", "calculate width for survey with matrices");
});

QUnit.test("Survey widthMode - css", function (assert) {
  var survey = new SurveyModel({
    "elements": [
      {
        "name": "question1",
      },
    ]
  });
  survey.widthMode = "static";
  assert.equal(survey.bodyCss, survey.css.body+" "+survey.css.body+"--static", "calculate body css for static width mode");
  survey.widthMode = "responsive";
  assert.equal(survey.bodyCss, survey.css.body+" "+survey.css.body+"--responsive", "calculate body css for responsive width mode");
});

QUnit.test("Survey widthMode property for rating questions", function (assert) {
  var survey3 = new SurveyModel({
    pages: [
      {
        "elements": [
          {
            "type": "rating",
            "name": "question1"
          }
        ]
      },
    ]
  });
  var q: QuestionRatingModel = survey3.getQuestionByName("question1") as QuestionRatingModel;
  assert.equal(survey3.widthMode, "auto");
  assert.equal(survey3.calculateWidthMode(), "static", "default rating widthMode is static");
  q.rateMax = 20;
  assert.equal(survey3.calculateWidthMode(), "responsive", "big rateMax rating widthMode is responsive");
  q.rateMin = 15;
  assert.equal(survey3.calculateWidthMode(), "static", "big rateMin rating widthMode is static");
  q.rateMin = 0;
  q.rateStep = 5;
  assert.equal(survey3.calculateWidthMode(), "static", "big rateStep rating widthMode is static");
  q.minRateDescription = "desc_min";
  assert.equal(survey3.calculateWidthMode(), "responsive", "minRateDescription rating widthMode is responsive");
  q.minRateDescription = "";
  q.maxRateDescription = "desc_max";
  assert.equal(survey3.calculateWidthMode(), "responsive", "maxRateDescription rating widthMode is responsive");
  q.minRateDescription = "desc_min";
  assert.equal(survey3.calculateWidthMode(), "responsive", "both descriptions rating widthMode is responsive");

  q.displayMode = "dropdown";
  assert.equal(survey3.calculateWidthMode(), "static", "dropdown rating widthMode is static");

  survey3.fromJSON({
    pages: [
      {
        "elements": [
          {
            "type": "rating",
            "name": "question1",
            "rateValues": [
              1,
              {
                "value": 2,
                "text": "a"
              },
              3,
              4,
              5
            ]
          }
        ]
      },
    ]
  });
  assert.equal(survey3.calculateWidthMode(), "responsive", "rating with rate values widthMode is responsive");
});
