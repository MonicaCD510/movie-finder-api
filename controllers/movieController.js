const axios = require("axios");

// Search movies
const searchMovies = async (req, res) => {
  const title = req.query.title;

  // Validate title query
  if (!title) {
    return res.status(400).json({
      error: "Title query parameter is required",
    });
  }

  try {
    // Request movies from OMDb API
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    // Send results back to client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    res.status(500).json({
      error: "Could not fetch movies",
    });
  }
};

// Get movie details
const getMovieDetails = async (req, res) => {
  const id = req.params.id;

  try {
    // Request movie details from OMDb API
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        i: id,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    // Send movie details back
    res.json(response.data);
  } catch (error) {
    // Handle errors
    res.status(500).json({
      error: "Could not fetch movie details",
    });
  }
};

module.exports = {
  searchMovies,
  getMovieDetails,
};