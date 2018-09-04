const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/gamePage.hbs");
class GamePage extends BasePage {
  template() {
    // const context - the json file that stores image and spelling information
    return compiledTemplate();
  }
}

module.exports = GamePage;
