require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/book');

async function seed() {

  const books = [
    {
      title: 'The Hobbit',
      description: 'There and Back Again',
      status: 'Available',
    },
    {
      title: 'The Fellowship of the Ring',
      description: 'A Long Expected Party',
      status: 'Available',
    },
    {
      title: 'The Two Towers',
      description: 'The Taming of Smeagol',
      status: 'Available',
    },
    {
      title: 'The Return of the King',
      description: 'The Grey Havens',
      status: 'Available',
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      description: 'The Heir of Slytherin',
      status: 'Unavailable',
    },
    {
      title: 'Lord of the Flies',
      description: 'Piggy and the Conch',
      status: 'Unavailable',
    },
  ];

  for (let book of books) {
    const newBook = new Book(book);
    await newBook.save();
  }

  console.log('Database seeded successfully');

  mongoose.disconnect();
}

seed();