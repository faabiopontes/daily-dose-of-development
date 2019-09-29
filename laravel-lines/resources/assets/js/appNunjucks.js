
appNunjucks = {
  jsonStringArrayObjects: `{
    "persons": [
      {"name": "Fabio"},
      {"name": "Lucas"}
    ]
  }`,
  jsonStringObjectObjects: `{
    "persons": {
      "0": {"name": "Joana"},
      "1": {"name": "Sofia"}
    }
  }`,
  init: function () {
    this.render(this.jsonStringArrayObjects, "template", "section");
    this.render(this.jsonStringObjectObjects, "template2", "section2");
  },
  render: function (jsonString, templateId, sectionId) {
    var jsonObject = JSON.parse(jsonString);
    var template = document.getElementById(templateId).innerHTML;
    var renderedHTML = nunjucks.renderString(template, jsonObject);
    document.getElementById(sectionId).innerHTML = renderedHTML;
  }
}

appNunjucks.init();