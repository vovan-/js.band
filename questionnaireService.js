'use strict';

module.exports = function () {

  var availableCountries = ['USA', 'BY', 'RU'];

  var questionType = {
    text: 'text',
    number:'number',
    entity:'entity'
  };

  var validationStatus = {
    success: 'success',
    failed: 'failed'
  };

  var validationMessages = {
    isMandatory: 'Field is mandatory',
    isLengthToLong: 'Field is too long (max length = 32)',
    isNotNumber: 'Field\'s value is not a number',
    isLessThanMinNumber: 'Field is less than min number (min number = 0)',
    isGreaterThanMaxNumber: 'Field is greater than max number (max number = 1024)',
    notExistedCountry: 'Specified country doesn\'t exist (valid are: USA, BY, RU)'
  };

  var create_questionnaire = function(id, text) {
    return {
      questionnaireId: id,
      chapters: {
        'chapter-id-1': {
          id: 0,
          name: 'About you',
          questions: {
            "question-id-1": {
              name: {
                en: "What is your Organization name?",
                de: "Was ist Ihr Name der Organisation?"
              },
              type: "text",
              value: "IBM",
              mandatory: true
            },
            "question-id-2": {
              name: {
                en: "Income",
                de: "Einkommen"
              },
              type: "number",
              value: 1000.00,
              mandatory: true
            },
            "question-id-3": {
              name: {
                en: "Country",
                ru: "Страна"
              },
              type: "entity",
              entytyType: "region",
              value: "US,USA",
              mandatory: true
            }
          }
        },
        "chapter-id-2": {
          name: "Parent company",
          questions: {
            "question-id-4": {
              name: {
                en: "What is your Parent Organization name?",
                de: "Was ist Ihre Mutterorganisationsname?"
              },
              type: "text",
              value: "Company",
              mandatory: false
            },
            "question-id-5": {
              name: {
                en: "Income",
                de: "Einkommen"
              },
              type: "number",
              value: 200,
              mandatory: false
            },
            "question-id-6": {
              name: {
                en: "Country",
                ru: "Страна",
                jp: "国"
              },
              type: "entity",
              entytyType: "region",
              value: "",
              mandatory: false
            }
          }
        }
      }
    };
  };

  var questionnaire = create_questionnaire(0, '');

  var validateQuestionnaire = function(questionnaire) {
    var chapters = questionnaire.chapters,
      curChapterProperty,
      result = true;

    if (chapters) {
      for(curChapterProperty in chapters) {
        if (chapters.hasOwnProperty(curChapterProperty)) {
          result = validateChapter(chapters[curChapterProperty]) && result;
        }
      }
    }

    return result;
  };

  var validateChapter = function(chapter) {
    var questions = chapter.questions,
      curQuestionProperty,
      result = true;

    if (questions) {
      for(curQuestionProperty in questions) {
        if (questions.hasOwnProperty(curQuestionProperty)) {
          result = validateQuestion(questions[curQuestionProperty]) && result;
        }
      }
    }

    return result;
  };

  var validateQuestion = function(question) {
    if (question.mandatory && !question.value) {
      question.validationError = validationMessages.isMandatory;
      return false;
    }

    switch (question.type) {
      case questionType.text: return validateTextValue(question);
      case questionType.number: return validateNumberValue(question);
      case questionType.entity: return validateEntityValue(question);
    }

    return true;
  };

  var validateTextValue = function(question) {
    if (question.value.length > 32) {
      question.validationError = validationMessages.isLengthToLong;
      return false;
    }

    return true;
  };

  var validateNumberValue = function(question) {
    var validationError;

    if (question.value && typeof question.value !== 'number') {
      validationError = validationMessages.isLengthToLong;
    } else if (question.value < 0) {
      validationError = validationMessages.isLessThanMinNumber;
    } else if (question.value > 1024) {
      validationError = validationMessages.isGreaterThanMaxNumber;
    }

    if (validationError) {
      question.validationError = validationError;
      return false;
    }

    return true;
  };

  var validateEntityValue = function(question) {
    var i, curCountry;

    if (!question.mandatory && !question.value) {
      return true;
    }

    for (i = 0; i < availableCountries.length; i += 1) {
      curCountry = availableCountries[i];

      if (curCountry === question.value) {
        return true;
      }
    }

    question.validationError = validationMessages.notExistedCountry;
    return false;
  };

  return {
    dispatchRequest: function(req, res) {
      if (req.method === 'GET' && req.url.indexOf('/api/questionnaires') === 0) {
        res.write(JSON.stringify(questionnaire));
        res.end();

        return true;
      }

      if (req.method === 'POST' && req.url.indexOf('/api/questionnaires') === 0) {
        var postedQuestionnaire = req.body,
          isValid = validateQuestionnaire(postedQuestionnaire);

        postedQuestionnaire.validationStatus = isValid ? validationStatus.success : validationStatus.failed;

        res.write(JSON.stringify(postedQuestionnaire));
        res.end();

        return true;
      }

      return false;
    }
  };
}();
