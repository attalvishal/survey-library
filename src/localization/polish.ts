import { surveyLocalization } from "survey-core";

export var polishSurveyStrings = {
  pagePrevText: "Wstecz",
  pageNextText: "Dalej",
  completeText: "Gotowe",
  previewText: "Premiera",
  editText: "Edycja",
  startSurveyText: "Start",
  otherItemText: "Inna odpowiedź (wpisz)",
  noneItemText: "Brak",
  selectAllItemText: "Wybierz wszystkie",
  progressText: "Strona {0} z {1}",
  panelDynamicProgressText: "Zapis {0} z {1}",
  questionsProgressText: "Odpowiedzi na {0}/{1} pytania",
  emptySurvey: "Nie ma widocznych pytań.",
  completingSurvey: "Dziękujemy za wypełnienie ankiety!",
  completingSurveyBefore:
    "Z naszych zapisów wynika, że wypełniłeś już tę ankietę.",
  loadingSurvey: "Trwa wczytywanie ankiety...",
  optionsCaption: "Wybierz...",
  value: "Wartość",
  requiredError: "Proszę odpowiedzieć na to pytanie.",
  requiredErrorInPanel: "Proszę odpowiedzieć na co najmniej jedno pytanie.",
  requiredInAllRowsError: "Proszę odpowiedzieć na wszystkie pytania.",
  numericError: "W tym polu można wpisać tylko liczby.",
  textMinLength: "Proszę wpisać co najmniej {0} znaków.",
  textMaxLength: "Proszę wpisać mniej niż {0} znaków.",
  textMinMaxLength: "Proszę wpisać więcej niż {0} i mniej niż {1} znaków.",
  minRowCountError: "Proszę uzupełnić przynajmniej {0} wierszy.",
  minSelectError: "Proszę wybrać co najmniej {0} pozycji.",
  maxSelectError: "Proszę wybrać nie więcej niż {0} pozycji.",
  numericMinMax:
    "Odpowiedź '{0}' powinna być większa lub równa {1} oraz mniejsza lub równa {2}",
  numericMin: "Odpowiedź '{0}' powinna być większa lub równa {1}",
  numericMax: "Odpowiedź '{0}' powinna być mniejsza lub równa {1}",
  invalidEmail: "Proszę podać prawidłowy adres email.",
  invalidExpression: "Wyrażenie: {0} powinno wracać 'prawdziwe'.",
  urlRequestError: "Żądanie zwróciło błąd '{0}'. {1}",
  urlGetChoicesError:
    "Żądanie nie zwróciło danych albo ścieżka jest nieprawidłowa",
  exceedMaxSize: "Rozmiar przesłanego pliku nie może przekraczać {0}.",
  otherRequiredError: "Proszę podać inną odpowiedź.",
  uploadingFile:
    "Trwa przenoszenie Twojego pliku, proszę spróbować ponownie za kilka sekund.",
  loadingFile: "Ładowanie...",
  chooseFile: "Wybierz plik(i)...",
  fileDragAreaPlaceholder: "Upuść plik tutaj lub kliknij przycisk poniżej, aby załadować plik.",
  noFileChosen: "Nie wybrano żadnego pliku",
  confirmDelete: "Chcesz skasować nagranie?",
  keyDuplicationError: "Ta wartość powinna być wyjątkowa.",
  addColumn: "Dodaj kolumnę",
  addRow: "Dodaj wiersz",
  removeRow: "Usuń",
  addPanel: "Dodaj panel",
  removePanel: "Usuń",
  choices_Item: "element",
  matrix_column: "Kolumna",
  matrix_row: "Wiersz",
  savingData: "Zapisuję wyniki ankiety na serwerze...",
  savingDataError: "Wystąpił błąd i wyniki nie mogły zostać zapisane.",
  savingDataSuccess: "Wyniki zostały poprawnie zapisane!",
  saveAgainButton: "Spróbuj ponownie",
  timerMin: "min",
  timerSec: "sek",
  timerSpentAll: "Spędziłeś {0} na tej stronie a w sumie {1}.",
  timerSpentPage: "Spędziłeś {0} na tej stronie.",
  timerSpentSurvey: "Spędziłeś w sumie {0}.",
  timerLimitAll: "Spędziłeś {0} z {1} na tej stronie a w sumie {2} z {3}.",
  timerLimitPage: "Spędziłeś {0} z {1} na tej stronie",
  timerLimitSurvey: "Spędziłeś {0} z {1}.",
  cleanCaption: "Wyczyść",
  clearCaption: "Jasne",
  chooseFileCaption: "Wybierz plik",
  removeFileCaption: "Usuń ten plik",
  booleanCheckedLabel: "Tak",
  booleanUncheckedLabel: "Nie",
  confirmRemoveFile: "Jesteś pewien, że chcesz usunąć ten plik: {0}?",
  confirmRemoveAllFiles: "Jesteś pewien, że chcesz usunąć wszystkie pliki?",
  questionTitlePatternText: "Tytuł pytania",
  ratingOptionsCaption: "Kliknij tutaj, aby ocenić...",
};

surveyLocalization.locales["pl"] = polishSurveyStrings;
surveyLocalization.localeNames["pl"] = "polski";
