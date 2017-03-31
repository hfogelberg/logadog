const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  animaType: {
    type: String,
    trim: true,
    dfault: 'Dog'
  },
  language: {
    type: String,
    trim: true,
    dfault: 'En'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

let Breed = mongoose.model('Breeds', breedSchema);
module.exports = { Breed}
