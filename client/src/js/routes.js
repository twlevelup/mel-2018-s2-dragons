const HomePage = require("./pages/homePage");
const ContactsPage = require("./pages/contactsPage");
const GameHomePage = require("./pages/gameHomePage");
const TeamPage = require("./pages/teamPage");
const FourOhFour = require("./pages/404Page");
const FeedbackPage = require("./pages/feedbackPage");

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'gameHomePage': GameHomePage,
  'team': TeamPage,
  '404': FourOhFour,
  'feedback': FeedbackPage
};
