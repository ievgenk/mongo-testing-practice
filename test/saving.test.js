const chai = require('chai');
const expect = chai.expect
const {
  marioChar
} = require('./../model/mariochar');

describe('saving records', function () {
  it('Saves a record to the database', function (done) {
    let char = new marioChar({
      name: "Mario"
    })
    char.save().then(() => {
      expect(char.isNew === false)
      done();
    }, (e) => {
      return console.log(e)
    })
  })
})