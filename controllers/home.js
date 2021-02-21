const HomeController = (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  });

  res.write('<h1>Hello World!</h1>');
  res.end();
};

const HomePostController = (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/plain'
  });

  res.write('Welcome to the back seat!');
  res.end();
};

module.exports = {
  HomeController,
  HomePostController,
}
