const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/feedbackPage.hbs");

class FeedbackPage extends BasePage {
  template() {
    return compiledTemplate();
  }
}

module.exports = FeedbackPage;
