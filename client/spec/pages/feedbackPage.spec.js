const FeedbackPage = require("../../src/js/pages/feedbackPage");

describe("The Feedback Page", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should contain the correct text", () => {
      const page = new FeedbackPage();
      expect(page.template()).toContain("This is the feedback page");
    });
  });
});
