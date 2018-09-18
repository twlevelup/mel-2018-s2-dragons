const GamePage = require("../../src/js/pages/gamePage");

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
    expect(page.template()).toContain("<p>Option1</p>");
    expect(page.template()).toContain("<p>Option2</p>");
  });

  it('should have image tag', () => {
    const page = new GamePage(); 
    expect(page.template()).toContain('<img src="../src/images">');
  });
});
