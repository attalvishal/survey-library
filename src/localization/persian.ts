import { surveyLocalization } from "survey-core";

export var persianSurveyStrings = {
  pagePrevText: "قبلی",
  pageNextText: "بعدی",
  completeText: "تکمیل",
  previewText: "پیش نمایش",
  editText: "ویرایش",
  startSurveyText: "شروع",
  otherItemText: "دیگر(توضیح)",
  noneItemText: "هیچ",
  selectAllItemText: "انتخاب همه",
  progressText: "صفحه {0} از {1}",
  panelDynamicProgressText: "مورد {0} از {1}",
  questionsProgressText: "تعداد پاسخ {0}/{1} سوال",
  emptySurvey: "صفحه ای یا گزینه ای برای این پرسشنامه موجود نیست.",
  completingSurvey: "از شما بابت تکمیل این پرسشنامه متشکریم",
  completingSurveyBefore:
    "به نظر می رسد هم هم اکنون پرسشنامه را تکمیل کرده اید.",
  loadingSurvey: "درحال ایجاد پرسشنامه",
  placeholder: "انتخاب کنید...",
  value: "مقدار",
  requiredError: "لطفا به سوال پاسخ دهید",
  requiredErrorInPanel: "لطفا حداقل به یک سوال پاسخ دهید.",
  requiredInAllRowsError: "لطفا سوالات تمام سطرها را پاسخ دهید.",
  numericError: "مقدار باید عددی باشد",
  textMinLength: "لطفا حداقل  {0} حرف وارد کنید",
  textMaxLength: "لطفا کمتر از  {0} حرف وارد کنید.",
  textMinMaxLength: "لطفا بیشتر از  {0} حرف و کمتر از {1} حرف وارد کنید.",
  minRowCountError: "لطفا حداقل {0} سطر وارد کنید.",
  minSelectError: "حداقل {0} انتخاب کنید.",
  maxSelectError: "لطفا بیشتر از  {0} انتخاب کنید.",
  numericMinMax:
    "'{0}' باید بین {1} و {2} باشد",
  numericMin: "'{0}' بزرگتر مساوی {1} باشد",
  numericMax: "'{0}' باید کوچکتر یا مساوی {1} باشد",
  invalidEmail: "لطفا ایمیل صحیح درج کنید",
  invalidExpression: "عبارت: {0} پاسخ باید 'true' باشد.",
  urlRequestError: "درخواست با خطا روبرو شد: '{0}'. {1}",
  urlGetChoicesError:
    "درخواست مسیری خالی بازگشت داده یا مسیر درست تنظیم نشده",
  exceedMaxSize: "بیشترین حجم مجاز فایل: {0}",
  otherRequiredError: "مقدار 'دیگر' را وارد کنید",
  uploadingFile:
    "فایل در حال آیلود است. لطفا صبر کنید.",
  loadingFile: "بارگیری...",
  chooseFile: "انتخاب فایل(ها)...",
  noFileChosen: "هیچ فایلی انتخاب نشده",
  confirmDelete: "آیا مایل به حذف این ردیف هستید؟",
  keyDuplicationError: "این مقدار باید غیر تکراری باشد",
  addColumn: "ستون جدید",
  addRow: "سطر جدید",
  removeRow: "حذف",
  addPanel: "جدید",
  removePanel: "حذف",
  choices_Item: "آیتم",
  matrix_column: "ستون",
  matrix_row: "سطر",
  savingData: "نتایج در حال ذخیره سازی در سرور است",
  savingDataError: "خطایی در ذخیره سازی نتایج رخ داده است",
  savingDataSuccess: "نتایج با موفقیت ذخیره شد",
  saveAgainButton: "مجدد تلاش کنید",
  timerMin: "دقیقه",
  timerSec: "ثانیه",
  timerSpentAll: "شما مدت {0} در این صفحه و مدت {1} را در مجموع سپری کرده اید.",
  timerSpentPage: "شما مدت {0} را در این صفحه سپری کرده اید.",
  timerSpentSurvey: "شما مدت {0} را در مجموع سپری کرده اید.",
  timerLimitAll:
    "شما مدت {0} از {1} در این صفحه و مدت {2} از {3} را در مجموع سپری کرده اید.",
  timerLimitPage: "شما مدت {0} از {1} را در این صفحه سپری کرده اید.",
  timerLimitSurvey: "شما مدت {0} از {1} را در مجموع سپری کرده اید.",
  clearCaption: "خالی کردن",
  chooseFileCaption: "انتخاب فایل",
  removeFileCaption: "حذف این فایل",
  booleanCheckedLabel: "بله",
  booleanUncheckedLabel: "خیر",
  confirmRemoveFile: "آیا میخواهید این فایل را پاک کنید: {0}?",
  confirmRemoveAllFiles: "آیا میخواهید تمام فایل ها را پاک کنید?",
  questionTitlePatternText: "عنوان سوال",
};

surveyLocalization.locales["fa"] = persianSurveyStrings;
surveyLocalization.localeNames["fa"] = "فارْسِى";
