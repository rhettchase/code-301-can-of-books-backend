require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const Book = require('./models/book');

async function seed() {

  const books = [
    {
      title: 'The Hunger Games',
      description: 'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.',
      status: 'Available',
      image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447303603l/2767052.jpg',
    },
    {
      title: 'Wheel of Time',
      description: 'The Eye of the World',
      status: 'Available',
      image_url: 'https://m.media-amazon.com/images/M/MV5BZjcyOTk2YmQtMTI3NS00MTM3LWIyZDgtZGJkMDk1YmE2ZDEwXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg',
    },
    {
      title: 'Harry Potter and the Sorcerers Stone',
      description: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world',
      status: 'Available',
      image_url: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title: 'Twilight',
      description: 'When Bella Swan moves to a small town in the Pacific Northwest to live with her father, she meets the reclusive Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.',
      status: 'Available',
      image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361039443l/41865.jpg',
    },
    {
      title: 'The Return of the King',
      description: 'The Grey Havens',
      status: 'Available',
      image_url: 'https://m.media-amazon.com/images/I/41KPaTTRxFL.jpg',
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      description: 'The Heir of Slytherin',
      status: 'Unavailable',
      image_url: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/510CXXt9CqL.jpg',
    },
    {
      title: 'Lord of the Flies',
      description: 'Piggy and the Conch',
      status: 'Unavailable',
      image_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327869409l/7624.jpg',
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