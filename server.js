var connect = require('connect'),
    http = require('http'),
    app;

app = connect()
  .use(connect.favicon())
  .use(connect.static('public'));

http.createServer(app).listen(8000);
console.log("Started server on port 8000");