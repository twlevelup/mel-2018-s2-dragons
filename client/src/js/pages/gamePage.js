const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/gamePage.hbs");
class GamePage extends BasePage {
  template() {
    // const context - the json file that stores image and spelling information
    return compiledTemplate();
  }
}
// index = rand();
// Get animals[index]
// Display animals[index].filename
// Display animals[index].animal as the correct answer

// Randomize another number that's different from index
// Get animals[new random number].animal to display as the incorrect answer
module.exports = GamePage;
