let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let {Breed} = require('../server/models/breedModel.js');

chai.use(chaiHttp);

describe('Test breeds', () => {
    beforeEach((done) => {
        Breed.remove({}, (err) => {
           done();
        });
    });

    it('should get breeds', (done)=>{
      chai.request(server)
        .get('/api/breed/dog/en')
        .end((err, res) =>{
          res.should.have.status(200);
          res.body.should.have.property('breeds').be.a('array');
          let breeds = res.body.breeds;
           breeds.length.should.be.eql(0);
           done();
        });
    });

    it('should save a breed', (done) => {
      let sheltie = {name: 'Sheltie'};
      chai.request(server)
          .post('/api/breed')
          .send(sheltie)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('message').eql('Ok');
            res.body.should.have.property('breed');
            done();
          });
        });

    it('should update a breed', (done)=>{
      let sheltie = new Breed({name: 'Sheltie'});
      sheltie.save((err, shelitie)=>{
        chai.request(server)
            .put('/api/breed/' + sheltie.id)
            .send({name: 'Shetland Sheepdog'})
            .end((err, res)=>{
              res.should.status(200);
              console.log(res);
              let breed = res.body.breed;
              console.log(breed);
              breed.name.should.eq('Shetland Sheepdog');
            });
      });
    });
});
