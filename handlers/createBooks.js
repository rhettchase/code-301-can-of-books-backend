const Book = require('../models/book');

module.exports = async function createBooks(request, response) {
  try {
    console.log('Handling /books POST request');
    const newBook = await Book.create(request.body);
    response.send(newBook);
  } catch (error) {
    console.error(error);
    response.status(500).send('Error creating book');
  }
};
