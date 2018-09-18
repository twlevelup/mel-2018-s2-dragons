const HomePage = require("./pages/homePage");
const ContactsPage = require("./pages/contactsPage");
const GameHomePage = require("./pages/gameHomePage");
const TeamPage = require("./pages/teamPage");
const FourOhFour = require("./pages/404Page");
const FeedbackPage = require("./pages/feedbackPage");
const GamePage = require("./pages/gamePage");

module.exports = {
  "/": HomePage,
  contacts: ContactsPage,
  team: TeamPage,
  "404": FourOhFour,
  feedback: FeedbackPage,
  game: GamePage,
  gameHomePage: GameHomePage
};
