const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(function (done) {
  mongoose.connect('mongodb://localhost:27017/testaroo');
  mongoose.connection.once('open', () => {
    console.log('connected to the db')
    done();
  }).on('error', (e) => {
    console.log(`Connection error ${e}`)
  })
})

beforeEach(function (done) {
  mongoose.connection.collections.mariochars.drop(function () {
    done();
  })
})