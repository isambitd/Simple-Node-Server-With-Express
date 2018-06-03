var express = require('express'),
     app = express(),
     basePath = __dirname + '/../www',
    port = 9003,
    host = '127.0.0.1',
    args = process.argv;

args.shift(); args.shift();
try {
  while (args.length > 0) {
    if(args[0] === '--host' || args[0] === '-H') {
      args.shift();
      if(args.length) {
          host = args.shift();
      }
      else {
        throw 'host value missing';
      }
    }
    else if(args[0] === '--port' || args[0] === '-P') {
      args.shift();
      if(args.length) {
          port = args.shift();
      }
      else {
        throw 'host value missing';
      }
    }
    else {
      args.shift();
      throw 'host value missing'; 
    }
  }

  app.use(express.static(basePath));

  app.get('/', function(req, res){ 
      res.render('index.html');
  });

  app.listen(port, host, function () {
      console.log('Node server initiated and running on port ' + port + ' and host ' + host);
  });
}
catch (e) {
  console.log(e);
  console.error('Please supply the values properly...');
}