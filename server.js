var express = require('express'),
      app = express(),
      fs = require('fs'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      mongoose = require('./server/db/mongoose'),
      {api} = require('./server/api/api'),
      settings = require('./config'),
      port = process.env.PORT || 8081;

// app.use('*', cors());
app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
          next();
    });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(__dirname + '/'));
api(app, mongoose, settings );

app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}\n`;
  fs.appendFile(`server.log`, log, (err)=>{
    if(err) {
      console.log('Unable to find log file');
    }
  });
  next();
});

app.listen(port, ()=>{
  console.log('Listening on port ' + port);
});

module.exports = app; // for testing
