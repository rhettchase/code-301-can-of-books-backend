const Book = require('../models/book');

module.exports = async function getBooks(request, response) {
  try {
    console.log('Handling /books request');
    const filterQuery = {};

    if (request.query.title) {
      filterQuery.title = { $regex: new RegExp(request.query.title, 'i') };
    }

    if (request.query.status) {
      filterQuery.status = request.query.status;
    }

    if (request.query.keyword) {
      filterQuery.description = {
        $regex: new RegExp(request.query.keyword, 'i'),
      };
    }

    const books = await Book.find(filterQuery);
    console.log('Books retrieved from the database:', books);
    response.status(200).send(books);
  } catch (error) {
    console.error(error);
    response.status(500).send(error.message);
  }
};