const assert = require('assert');
const {Breed} = require('../server/models/breedModel.js');

describe('create breed', () => {
  it('saves a breed', (done) => {
    const sheltie = new Breed({name: 'Sheltie'});
    sheltie.save()
        .then(() => {
          assert(!sheltie.isNew);
          done();
        });
  });
});
