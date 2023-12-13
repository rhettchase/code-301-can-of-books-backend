'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/book');
const getBooks = require('./handlers/getBooks');
const createBooks = require('./handlers/createBooks');
const deleteBook = require('./handlers/deleteBook');
const updateBook = require('./handlers/updateBook');
const notFound = require('./handlers/notFound');
const errorHandler = require('./handlers/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

// database
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("We're connected!");
});

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/books', getBooks);
app.post('/books', createBooks);
app.delete('/books/:id', deleteBook);
app.put('/books/:id', updateBook);
app.get('*', notFound);
app.use('*', errorHandler); // * represents any type of request at any path

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).send(error.message);
  next(); // Call next to pass the error to the next middleware
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
