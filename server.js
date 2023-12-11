'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/book');

mongoose.connect(process.env.DATABASE_URL);
const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(cors());

// routes
app.get('/books', getBooks);

app.get('/test', (request, response) => {
  const Cat = mongoose.model('Cat', { name: String });
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));
  const cats = [kitty];
  response.status(200).json(cats);
});

// handlers
async function getBooks(request, response) {
  console.log('Handling /books request');
  const filterQuery = {};

  if(request.query.status) {
    filterQuery.status = request.query.status;
  }

  const books = await Book.find(filterQuery);
  console.log('Books retrieved from the database:', books);

  response.status(200).json(books);
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));