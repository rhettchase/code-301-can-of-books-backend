# Can of Books Back-End

**Author**: Rhett Chase || Kaitlin Davis

**Version**: 2.1.0

## Overview

Application is the back-end database for books. It will take in a selection of status from the client (if book is `available` or `unavailable` return data based on the request.  The user is able to to view the list of books based on their criteria. They also have the ability to add new books and delete books from the collection.

The application features a custom server, which provides data for the Can of Books front-end application.

Can of Books is a user-friendly application designed to simplify the process of finding books. Whether you're a book enthusiast, a student, or just someone looking for a good read, Can of Books helps you locate books with various titles with ease.

[Front-end GitHub Repo](https://github.com/KaitlinDa/can-of-books-frontend)
[Back-end GitHub Repo](https://github.com/rhettchase/code-301-can-of-books-backend/tree/main)
[Deployed Site](https://can-of-books-rckd.netlify.app/)

## Getting Started

In order to get started, you make a repo on GitHub and clone the repository to your local machine. There are two repositories for this app (front-end and back-end). Then, install the dependencies you need. Set up any environmental variables on Render. Start the sever.

### Install Dependencies

- Mongoose
- dotenv
- cors
- express
- Create an `.env` file: include MongoDB url (`DATABASE_URL`) and `PORT`. Make sure this file is in your `.gitignore`.

## Architecture

- Mongoose
- MongoDB
- Javascript
- Express.JS
- Node.JS

## Change Log

12-11-2023 6:30pm - Implemented Mongoose to the custom server. Ensured local Mongo database is running and connected the Mongo database from within the server code. Developed `/books` route, using a REST client to hit the route, enabling verification of what the server is returning. When a client sends a `GET` to the `/books` route, the server retrieves all of the books from the `books` collection, and return them as JSON in the response object.
12-12-2023 7:30 pm - Deployed external database `MongoDB Atlas` and server `render`. Added a new route and handler function to your server, to respond to `POST` requests to `/books`.(book-creation end point). Added a server end point to handle `DELETE` requests to `/books/:id`. Verified functioning both on Thunder Client and on front-end.
12-13-2023 2:00 pm - Updated server code to handle `PUT` requests to a `/book/:id` route. User is able to update exisiting book details, and the database wiill return the updated book.

## Estimates

### Lab 11 - Book Storage Set-up

Estimate of time needed to complete: 2.5 hours
Start time: 1:30pm
Finish time: 3:30pm
Actual time needed to complete: 2 hours

### Lab 12 - Create Book Back-end

Estimate of time needed to complete: 1 hour
Start time: 12:30pm
Finish time: 1:15pm
Actual time needed to complete: 45 min

### Lab 12 - Delete Book Back-end

Estimate of time needed to complete: 1 hour
Start time: 1:15pm
Finish time: 1:45pm
Actual time needed to complete: 30 min

### Lab 13 - Update Book Back-end

Estimate of time needed to complete: 1 hour
Start time: 12:30pm
Finish time: 1:30pm
Actual time needed to complete: 1 hour

## Credit and Collaborations

- Chat GPT
- MongoDB Docs
- Mongoose Docs
- Render Docs
