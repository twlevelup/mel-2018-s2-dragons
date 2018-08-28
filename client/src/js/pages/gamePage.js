const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/gamePage.hbs');
class GamePage extends BasePage {
  template() {
    return compiledTemplate();
  }
}

module.exports = GamePage;
