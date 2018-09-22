const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/feedbackPage.hbs");

class FeedbackPage extends BasePage {
  template() {
    const context = {
      message: this.props.message
    };
    return compiledTemplate(context);
  }

  rightButtonEvent() {
    this.navigate("gamePage");
  }

  leftButtonEvent() {
    this.navigate("/");
  }
}

module.exports = FeedbackPage;
