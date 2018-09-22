const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/feedbackPage.hbs");

class FeedbackPage extends BasePage {
  template() {
    const context = {
      message: this.props.message,
	  class: this.props.class
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
