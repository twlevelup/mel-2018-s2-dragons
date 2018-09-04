const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/feedbackPage.hbs");

class FeedbackPage extends BasePage {
  template() {
    const context = {
      message: this.props.message
    };
    return compiledTemplate(context);
  }
}

module.exports = FeedbackPage;
