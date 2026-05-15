const express = require("express");

const router = express.Router();

const {
  searchMovies,
  getMovieDetails,
} = require("../controllers/movieController");

// Search movies route
router.get("/search", searchMovies);

// Get movie details route
router.get("/movies/:id", getMovieDetails);

module.exports = router;