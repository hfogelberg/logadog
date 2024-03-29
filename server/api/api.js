let api = (app, mongoose, cloudinary, settings) => {
  let {breedApi} = require('./breedApi');
  breedApi(app, mongoose, settings);

  app.get('/api', (req, res) => {
    res.send({'message': 'API is alive'});
  });
};

module.exports = {api};
