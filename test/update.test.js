const chai = require('chai');
const expect = chai.expect
const {
  marioChar
} = require('./../model/mariochar');

describe('updating records', function () {

  let char;

  beforeEach(function (done) {
    char = new marioChar({
      name: "Mario",
      weight: 50
    })
    char.save().then(() => {
      done();
    }, (e) => {
      return console.log(e)
    })
  })

  it('update a record in the db', function (done) {
    marioChar.findOneAndUpdate({
      name: "Mario"
    }, {
      name: 'Luigi'
    }).then(() => {
      marioChar.findOne({
        name: "Luigi"
      }).then((result) => {
        expect(result.name === 'Luigi')
        done()
      })
    })
  })

  it('updates weight by one', function (done) {
    marioChar.update({}, {
      $inc: {
        weight: 1
      }
    }).then(() => {
      marioChar.findOne({
        name: "Mario"
      }).then((result) => {
        expect(result.weight === 51)
        done()
      })
    })
  })


})