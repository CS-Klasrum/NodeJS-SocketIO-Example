/*

Import home controller from our controllers

*/
const {
  HomeController,
  HomePostController
} = require('./controllers/home');


const {
  ChatController
} = require('./controllers/chat');

/*

Routes must be then stored as METHOD:PATH
So we could have a support for restful requests

*/
const Routes = {
  'GET:/': HomeController,
  'POST:/': HomePostController,
  'GET:/chat': ChatController,
}

module.exports = Routes;