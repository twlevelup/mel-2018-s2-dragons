const GameHomePage = require("../../src/js/pages/gameHomePage");

describe("GameHomePage", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });
  describe("#template", () => {
    it("should have a template", () => {
      const page = new GameHomePage();
      expect(page.template()).toContain("gameHomePage");
    });
  });

  describe("#leftButtonEvent", () => {
    it("goes to home page", () => {
      const props = {
        navigate: () => {}
      };
      const page = new GameHomePage(props);
      spyOn(page, "navigate");

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("/");
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to game page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new GameHomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('gamePage');
    });
  });
});
