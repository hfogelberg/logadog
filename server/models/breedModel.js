const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  animal: {
    type: String,
    trim: true,
    dfault: 'Dog'
  },
  lang: {
    type: String,
    trim: true,
    dfault: 'En'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

let Breed = mongoose.model('Breed', breedSchema);
module.exports = { Breed}
