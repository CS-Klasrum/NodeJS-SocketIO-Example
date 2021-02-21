const fs = require('fs');
const path = require('path');

const ChatIO = (io) => {
  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('message', (msg) => {
      console.log(`message received: ${msg}`);
      io.emit('message', msg);
    });
  });
};

const ChatController = (req, res) => {
  const filePath = path.resolve(__dirname + '/../public/chat.html');
  const chatHTML = fs.readFileSync(filePath);

  res.write(chatHTML);
  res.end();
}

module.exports = {
  ChatIO,
  ChatController,
};