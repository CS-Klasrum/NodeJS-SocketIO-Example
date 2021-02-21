const { ChatIO } = require('./controllers/chat');

const Sockets = (io) => {
  ChatIO(io);
};

module.exports = Sockets;