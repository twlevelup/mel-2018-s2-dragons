const HomePage = require("./pages/homePage");
const ContactsPage = require("./pages/contactsPage");
const GameHomePage = require("./pages/gameHomePage");
const TeamPage = require("./pages/teamPage");
const FourOhFour = require("./pages/404Page");
const FeedbackPage = require("./pages/feedbackPage");
const GamePage = require("./pages/gamePage");

module.exports = {
<<<<<<< HEAD
  '/': HomePage,
  'contacts': ContactsPage,
  'gameHomePage': GameHomePage,
  'team': TeamPage,
  '404': FourOhFour,
  'feedback': FeedbackPage
=======
  "/": HomePage,
  contacts: ContactsPage,
  team: TeamPage,
  "404": FourOhFour,
  feedback: FeedbackPage,
  game: GamePage
>>>>>>> [Lam/Lu] Add randomiserHelper.js and change the test in gamePage.spec.js, constructor in gamePage.js
};
