require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const Book = require('./models/book');

async function clear() {
  try {
    await Book.deleteMany({});
    console.log('All books deleted successfully');
  } catch (error) {
    console.error('Error deleting books from the database');
  } finally {
    mongoose.disconnect();
  }
}

clear();
