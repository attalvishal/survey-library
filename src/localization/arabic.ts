import { surveyLocalization } from "survey-core";

export var arabicSurveyStrings = {
  pagePrevText: "السابق",
  pageNextText: "التالي",
  completeText: "إرسال البيانات",
  previewText: "معاينة",
  editText: "تعديل",
  startSurveyText: "بداية",
  otherItemText: "نص آخر",
  noneItemText: "لا شيء",
  selectAllItemText: "اختر الكل",
  progressText: "{1} صفحة {0} من",
  panelDynamicProgressText: "سجل {0} من {1}",
  questionsProgressText: "تمت الإجابة على أسئلة {0} / {1}",
  emptySurvey: "لا توجد صفحة مرئية أو سؤال في النموذج",
  completingSurvey: "شكرا لكم لاستكمال النموذج!",
  completingSurveyBefore:
    "تظهر سجلاتنا أنك قد أكملت هذا الاستطلاع بالفعل.",
  loadingSurvey: "...يتم تحميل النموذج",
  placeholder: "...اختر",
  value: "القيمة",
  requiredError: ".يرجى الإجابة على السؤال",
  requiredErrorInPanel: "الرجاء الإجابة على سؤال واحد على الأقل.",
  requiredInAllRowsError: "يرجى الإجابة على الأسئلة في جميع الصفوف",
  numericError: "يجب أن تكون القيمة رقمية.",
  textMinLength: "الرجاء إدخال ما لا يقل عن {0} حروف",
  textMaxLength: "الرجاء إدخال أقل من {0} حروف",
  textMinMaxLength: "يرجى إدخال أكثر من {0} وأقل من {1} حروف",
  minRowCountError: "يرجى ملء ما لا يقل عن {0} الصفوف",
  minSelectError: "يرجى تحديد ما لا يقل عن {0} المتغيرات",
  maxSelectError: "يرجى تحديد ما لا يزيد عن {0} المتغيرات",
  numericMinMax:
    "و'{0}' يجب أن تكون مساوية أو أكثر من {1} وتساوي أو أقل من {2}ا",
  numericMin: "و'{0}' يجب أن تكون مساوية أو أكثر من {1}ا",
  numericMax: "و'{0}' يجب أن تكون مساوية أو أقل من {1}ا",
  invalidEmail: "الرجاء إدخال بريد الكتروني صحيح",
  invalidExpression: "يجب أن يعرض التعبير: {0} 'صواب'.",
  urlRequestError: "طلب إرجاع خطأ '{0}'. {1}ا",
  urlGetChoicesError: "عاد طلب البيانات فارغ أو 'المسار' غير صحيح ",
  exceedMaxSize: "ينبغي ألا يتجاوز حجم الملف {0}ا",
  otherRequiredError: "الرجاء إدخال قيمة أخرى",
  uploadingFile: "تحميل الملف الخاص بك. يرجى الانتظار عدة ثوان والمحاولة لاحقًا",
  loadingFile: "جار التحميل...",
  chooseFile: "اختر الملفات...",
  noFileChosen: "لم تقم باختيار ملف",
  confirmDelete: "هل تريد حذف السجل؟",
  keyDuplicationError: "يجب أن تكون هذه القيمة فريدة.",
  addColumn: "أضف العمود",
  addRow: "اضافة صف",
  removeRow: "إزالة صف",
  addPanel: "اضف جديد",
  removePanel: "إزالة",
  choices_Item: "بند",
  matrix_column: "عمود",
  matrix_row: "صف",
  savingData: "يتم حفظ النتائج على الخادم ...",
  savingDataError: "حدث خطأ ولم نتمكن من حفظ النتائج.",
  savingDataSuccess: "تم حفظ النتائج بنجاح!",
  saveAgainButton: "حاول مجددا",
  timerMin: "دقيقة",
  timerSec: "ثانية",
  timerSpentAll: "لقد أنفقت {0} على هذه الصفحة و {1} إجمالاً.",
  timerSpentPage: "لقد أنفقت {0} على هذه الصفحة.",
  timerSpentSurvey: "لقد أنفقت {0} إجمالاً.",
  timerLimitAll:
    "لقد أنفقت {0} من {1} في هذه الصفحة و {2} من إجمالي {3}.",
  timerLimitPage: "لقد أنفقت {0} من {1} في هذه الصفحة.",
  timerLimitSurvey: "لقد أنفقت {0} من إجمالي {1}.",
  clearCaption: "واضح",
  chooseFileCaption: "اختر ملف",
  removeFileCaption: "قم بإزالة هذا الملف",
  booleanCheckedLabel: "نعم",
  booleanUncheckedLabel: "لا",
  confirmRemoveFile: "هل أنت متأكد أنك تريد إزالة هذا الملف: {0}؟",
  confirmRemoveAllFiles: "هل أنت متأكد أنك تريد إزالة كافة الملفات؟",
  questionTitlePatternText: "عنوان السؤال",
};

surveyLocalization.locales["ar"] = arabicSurveyStrings;
surveyLocalization.localeNames["ar"] = "العربية";
