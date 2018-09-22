const FeedbackPage = require("../../src/js/pages/feedbackPage");

describe("The Feedback Page", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should contain the correct text", () => {
      const page = new FeedbackPage({ message: "well done!" });
      expect(page.template()).toContain("well done!");
    });
  });

  describe("#rightButtonEvent", () => {
    it("goes back to the game page", () => {
      const props = {
        navigate: () => {}
      };
      const page = new FeedbackPage(props);
      spyOn(page, "navigate");

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("gamePage");
    });
  });

  describe("#leftButtonEvent", () => {
    it("goes to home page", () => {
      const props = {
        navigate: () => {}
      };
      const page = new FeedbackPage(props);
      spyOn(page, "navigate");

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("/");
    });
  });
});
