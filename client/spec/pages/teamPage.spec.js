const TeamPage = require("../../src/js/pages/teamPage");
const teamMembers = [
					"Lu-Vuong",
					"Lucy",
					"Lam",
					"Jessie",
					"Akshay",
					"Bernardo",
					"Brandon",
					"Minoli",
					"Nimisha"
					];
describe("TeamPage", () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
  });

  describe("#template", () => {
    it("should have a template", () => {
      const page = new TeamPage();
      expect(page.template()).toContain("<h1>Made by:</h1>");
    });

    it('should contain team members names', () => {
      const page = new TeamPage();
	  teamMembers.forEach( member => expect(page.template()).toContain(member));
	});

  });
});
