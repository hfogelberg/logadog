const mongoose = require('mongoose');

before((done) => {
  mongoose.Promise = global. Promise;
  mongoose.connect('mongodb://localhost/petpal_test');
  mongoose.connection
        .once('open', () => {
          console.log('Connected to Test DB');
          done();
        })
        .on('error', (err) => {
          console.warn('Warning', err);
        });
});

beforeEach((done) => {
  mongoose.connection.collections.breeds.drop(() => {
    done();
  });
});
