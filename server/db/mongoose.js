var mongoose = require('mongoose'),
      bluebird = require('bluebird');

mongoose.Promise = require('bluebird');

let env = process.env.NODE_ENV;
var dbUri = ''


switch(env) {
  case 'production':
    dbUri = 'mongodb://172.17.0.5'
    break;
  case 'development':
    dbUri = 'mongodb://localhost:27017/petpal';
    break;
  default:
    break;
}

if (dbUri != ''){
  console.log('Db connection open to: ' + dbUri);
  mongoose.createConnection(dbUri);
  mongoose.connection
      .once('open', () => {
        console.log('DB connection open');
      })
      .on('error', (err)=>{
        console.log('Error opening Db connection', err);
      });
}
mongoose.export = {mongoose};
