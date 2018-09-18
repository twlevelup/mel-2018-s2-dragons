const GamePage = require("../../src/js/pages/gamePage");
const animalData = require("../../src/data/animalData.json");
const randomizer = require("../../src/helpers/randomiserHelper");

describe("gamePage", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  it("should have a template", () => {
    const page = new GamePage();
    expect(page.template()).toContain("<h1>Game Page</h1>");
  });

  it("should have two options", () => {
    const page = new GamePage();
    const animalNames = animalData.animals.map(
      animalObject => animalObject.animal
    );
    const selectedAnimalIsInJsonFile =
      animalNames.includes(page.gameData.correctOption) &&
      animalNames.includes(page.gameData.incorrectOption);

    expect(selectedAnimalIsInJsonFile).toEqual(true);
  });

  it("should have image tag", () => {
    const page = new GamePage();
    expect(page.template()).toContain('<img src="../src/images">');
  });
});
