var mongoose = require('mongoose'),
      bluebird = require('bluebird'),
      {IS_LOCAL} = require('../../config');

mongoose.Promise = require('bluebird');
var dbUri = ''
if (IS_LOCAL) {
  console.log('Hooking up to dev Db');
  dbUri = 'mongodb://localhost:27017/haiku'
} else {
  console.log('Hooking up to prod Db');
  dbUri = 'mongodb://172.17.0.5'
}

console.log('Db connection to open: ' + dbUri);
mongoose.connect(dbUri);
mongoose.connection
    .once('open', () => {console.log('DB connection open');})
    .on('error', (err)=>{console.log('Warning', err);});

mongoose.export = {mongoose};
