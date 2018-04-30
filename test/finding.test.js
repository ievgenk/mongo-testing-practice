const chai = require('chai');
const expect = chai.expect
const {
  marioChar
} = require('./../model/mariochar');

describe('finding records', function () {

  let char;

  beforeEach(function (done) {
    char = new marioChar({
      name: "Mario"
    })
    char.save().then(() => {
      done();
    }, (e) => {
      return console.log(e)
    })
  })

  it('Finds one record from database', function (done) {
    marioChar.findOne({
      name: "Mario"
    }).then(function (result) {
      expect(result.name === 'Mario')
      done()
    })
  })


  it('Finding a record by an ID', function (done) {
    marioChar.findOne({
      _id: char._id
    }).then((result) => {
      expect(result._id.toString()).to.equal(char._id.toString())
      done();
    })
  })
})