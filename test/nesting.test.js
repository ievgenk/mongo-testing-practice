const chai = require('chai');
const mongoose = require('mongoose');
const {
  Author
} = require('./../model/author')
const expect = chai.expect;



describe('nesting records', function () {

  beforeEach(function (done) {
    mongoose.connection.collections.authors.drop(() => {
      done();
    })
  })


  it('creates an author with sub documents', function (done) {
    let pat = new Author({
      name: 'Patrick Rothfuss',
      books: [{
        title: 'Name of the wind',
        pages: 400
      }]
    })
    pat.save().then(() => {
      Author.findOne({
        name: 'Patrick Rothfuss'
      }).then((response) => {
        expect(response.books.length === 1)
        done();
      })
    }, (error) => {
      console.error(error)
    })
  })

  it('will add a new book to an existing author', function (done) {
    let pat = new Author({
      name: 'Patrick Rothfuss',
      books: [{
        title: 'Name of the wind',
        pages: 400
      }]
    })
    pat.save().then(() => {
      Author.findOne({
        name: 'Patrick Rothfuss'
      }).then((record) => {
        record.books.push({
          title: "Wise Man's Fear",
          pages: 500
        })
        record.save().then(() => {
          Author.findOne({
            name: "Patrick Rothfuss"
          }).then((result) => {
            expect(result.books.length === 2)
            done()
          })
        })
      })
    })
  })

})