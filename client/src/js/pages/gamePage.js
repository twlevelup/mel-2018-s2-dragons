const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/gamePage.hbs");
const context = require("../../data/animalData.json");
const randomizer = require("../../helpers/randomiserHelper");

class GamePage extends BasePage {
  constructor(props) {
    super(props);
    this.gameData = randomizer(context);
  }
  template() {
    return compiledTemplate(this.gameData);
  }

  topButtonEvent() {
    this.navigate("feedback", { message: "well done!" , class : "success"});
  }

  bottomButtonEvent() {
    this.navigate("feedback", { message: "try again" , class : "try"});
  }

  leftButtonEvent() {
    this.navigate("/");
  }
}
module.exports = GamePage;
