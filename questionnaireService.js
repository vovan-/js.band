'use strict';

module.exports = function (grunt) {

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
              value: 100000000.00,
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

  return {
    dispatchRequest: function(req, res) {
      if (req.method === 'GET' && req.url.indexOf('/api/questionnaires') === 0) {
        res.write(JSON.stringify(questionnaire));
        res.end();

        return true;
      }

      return false;
    }
  };
};
