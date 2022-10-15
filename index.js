const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function test(req, res)  {
  // console.log(req)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Our first node js website');
});


server.listen(port, hostname, () => {
  console.log(`Our node js app listening http://${hostname}:${port}/`);

  // console.log('Server running at http://' + hostname + port );
});