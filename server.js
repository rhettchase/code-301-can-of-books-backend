'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/book');
const notFound = require('./handlers/notFound');
const getBooks = require('./handlers/getBooks');
const errorHandler = require('./handlers/errorHandler');

mongoose.connect(process.env.MONGODB_URI);
const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(cors());

// routes
app.get('/books', getBooks);
app.get('*', notFound);
app.use('*', errorHandler); // * represents any type of request at any path


app.use((error, request, response) => {
  console.error(error);
  response.status(500).send(error.message);
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
