# Movie Finder API

A RESTful backend API built with Node.js and Express that fetches movie data from the OMDb API.

## Features

- Search movies by title
- Get movie details by IMDb ID
- Uses Express routing and controllers
- Secure API key storage with dotenv
- Error handling with try...catch

## Technologies Used

- Node.js
- Express
- Axios
- dotenv
- OMDb API

## API Endpoints

### Search Movies

GET /api/search?title=batman

### Get Movie Details

GET /api/movies/tt0372784

## Installation

1. Clone the repository
2. Run npm install
3. Create a .env file with your OMDb API key
4. Run node server.js

## Author

Monica Davila