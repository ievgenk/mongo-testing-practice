const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating schema and model

const marioCarhSchema = new Schema({
  name: String,
  weigth: Number
})

const marioChar = mongoose.model('marioChar', marioCarhSchema);

module.exports = {
  marioChar
}