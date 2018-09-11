const GameHomePage = require('../../src/js/pages/gameHomePage');

describe('GameHomePage', () => {
  describe('#template', () => {
    it('should have a template', () => {
      const page = new GameHomePage();
      expect(page.template()).toContain("gameHomePage");
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new GameHomePage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
