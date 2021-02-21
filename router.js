/*

Routes are used to store the action/controllers available to the application

*/
const Routes = require('./routes')

/*

Just like any server, we would like to have our application to have a default page not found controller in-order to support unexpected requests using 404 HTTP Status

See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

*/
const PageNotFound = (req, res) => {
  res.writeHead(404, {
    'content-type': 'text/plain'
  });

  res.write(`Page Not Found ${req.url}`);
}

/*

Here is our very simple router function to call the specified controller based on request

*/
const Router = (req, res) => {
  const { method, url } = req;
  const parsedURL = new URL(url, `http://${req.headers.host}`);

  // We must use path name from the address bar
  const path = parsedURL.pathname.toLowerCase();

  // construct a based from method and path
  // GET:/
  const routeKey = `${method}:${path}`

  // Find controller from routes, else just get the page not found
  const active_route = Routes[routeKey] || PageNotFound;

  // Track at stream
  console.log(`Received: ${method} at ${url}  [${path}] `)
  
  // Call route
  active_route(req, res);
};

module.exports = Router;