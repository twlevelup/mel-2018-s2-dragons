const GamePage = require("../../src/js/pages/gamePage");
const animalData = require("../../src/data/animalData.json");
const randomizer = require("../../src/helpers/randomiserHelper");

describe("gamePage", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
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
    expect(page.template()).toContain("img src");
  });

  it("should have a image in the animal data json file", () => {
    const page = new GamePage();
    const animalImages = animalData.animals.map(
      animalObject => animalObject.filename
    );
    const imageIsDisplayed = animalImages.includes(page.gameData.image);

    expect(imageIsDisplayed).toEqual(true);
  });

  describe("#topButtonEvent", () => {
    it("goes to feedback page", () => {
      const props = {
        navigate: () => {}
      };
      const page = new GamePage(props);
      spyOn(page, "navigate");

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("feedback", {
        message: "success"
      });
    });
  });

  describe("#bottomButtonEvent", () => {
    it("goes to feedback page", () => {
      const props = {
        navigate: () => {}
      };
      const page = new GamePage(props);
      spyOn(page, "navigate");

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("feedback", {
        message: "try again"
      });
    });
  });
});
