let breedApi = (app, mongoose, settings) => {
  var {Breed } = require('../models/breedModel.js');
},
  {authenticate} = require('../middleware/authenticate'),
{errLogger} = require('../utils/errLogger');


// POST breed
app.post('/api/user', authenticate, (req, res) => {
  console.log('POST breed');

  let name = req.body.name;
  let breed = new Breeds({name});
  breed.save()
      .then((breed) => {
        res.send({breed})
      })
      .catch((err) => {
        errLogger(e);
        res.status(500).send()
      });
});
