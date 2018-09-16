const BasePage = require("watch-framework").BasePage;
const compiledTemplate = require("../../templates/gamePage.hbs");
const animalData = require("../../data/animalData.json");

let animals = [];

function randomImage() {
  let random = Math.floor(Math.random() * Math.floor(6)); 

  if (animals.includes(random)) {
    randomImage();
  }else{
    animals.push(random);
    return animalData.animals[random].filename;
  }
}


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




