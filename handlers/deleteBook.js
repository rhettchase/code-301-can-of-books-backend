const Book = require('../models/book');

module.exports = async function deleteBook(request, response) {
  const id = request.params.id;
  try {
    console.log('Handling /books DELETE request');
    await Book.findByIdAndDelete(id); // pass in the id of the book to be deleted
    response.status(204).send('successfully deleted book'); 
  } catch (error) {
    console.error(error);
    response.status(404).send(`Unable to delete book with id ${id}`);
  }
};
