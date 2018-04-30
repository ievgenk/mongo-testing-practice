const chai = require('chai');
const expect = chai.expect
const {
  marioChar
} = require('./../model/mariochar');

describe('deleting records', function () {

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

  it('delete one record from DB', function (done) {
    marioChar.findOneAndRemove({
      name: "Mario"
    }).then(() => {
      marioChar.findOne({
        name: "Mario"
      }).then((result) => {
        expect(result === null)
        done()
      })
    })
  })



})