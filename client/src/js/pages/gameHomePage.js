const BasePage = require("watch-framework").BasePage;
const gameLogo = require("../../images/gameLogo.png");
const compiledTemplate = require("../../templates/gameHomePage.hbs");

class GameHomePage extends BasePage {
  template() {
    const context = {
      gameLogo: gameLogo
    };
    return compiledTemplate(context);
  }

  leftButtonEvent() {
    this.navigate("/");
  }
}

module.exports = GameHomePage;
