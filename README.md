# Can of Books Back-End

**Author**: Rhett Chase || Kaitlin Davis

**Version**: 1.0.0

## Overview

Application is the back-end database for books. It will take in a selection of status from the client (if book is `available` or `unavailable` return data based on the request.  The user is able to to view the list of books based on their criteria.

The application features a custom server, which provides data for the Can of Books front-end application.
Can of Books is a user-friendly application designed to simplify the process of finding books. Whether you're a book enthusiast, a student, or just someone looking for a good read, Can of Books helps you locate books with various titles with ease.

## Getting Started

In order to get started, you want to make a repo on GitHUB and then clone that repository to your local machine. In this case, you will have two. One front-end and one back end. Then, install the dependencies you need. Set up any environmental variables. Start the sever.

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

## Estimates

### Book Storage Set-up

Estimate of time needed to complete: 2.5 hours
Start time: 1:30pm
Finish time: 3:30pm
Actual time needed to complete: 2 hours

## Credit and Collaborations

- Chat GPT
- MongoDB Docs
- Mongoose Docs