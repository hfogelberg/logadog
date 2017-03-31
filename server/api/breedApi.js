let breedApi = (app, mongoose, settings) => {
  var {Breed } = require('../models/breedModel.js'),
        {errLogger} = require('../utils/errLogger');

// POST breed
app.post('/api/breed', (req, res) => {
  let name = req.body.name;
  let breed = new Breed({name});
  breed.save()
      .then((breed) => {
        res.send({message: 'Ok', breed: breed})
      })
      .catch((err) => {
        errLogger(e);
        res.status(500).send()
      });
    });

  // GET breeds by animal type and language
  app.get('/api/breed/:animal/:lang', (req, res)=>{
    let animal = req.params.animal;
    let lang = req.params.lang;
    let breeds = Breed.find({animal, lang})
      .then((breeds) =>{
        res.send({ breeds});
      })
      .catch((err)=>{
        errLogger(e);
        res.status(500).send();
      });
  });

  // PUT breed by id and update
  app.put('/api/breed/:id', (req, res)=>{
    console.log('PUT breed ');
    let id = req.params.id;
    let name = req.body.name
    console.log(id + ' ' + name);
    Breed.findByIdAndUpdate(id, {name: name})
        .then((breed)=>{
          console.log(breed);
          res.send({breed});
        })
        .catch((err)=>{
          errLogger(err);
          res.status(500).send();
        });
  });
};

module.exports = {breedApi}
