const Book = require('../models/book');

module.exports = async function updateBook(request, response) {
    const id = request.params.id;
    try {
        console.log('Handling /books UPDATE request');
        await Book.findByIdAndUpdate(id, request.body);
        console.log('Request Body:', request.body);

        response.status(200).send('Book updated');
    } catch (error) {
        console.error(error);
        response.status(500).send('Error updating book');
    }
}