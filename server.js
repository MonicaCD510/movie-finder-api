// dependencies
require("dotenv").config();
const express = require("express");
const movieRoutes = require("./routes/movieRoutes");

// app configuration
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());

// routes
app.use("/api", movieRoutes);

// server listener
app.listen(PORT, () => {
  console.log(`Movie Finder API is running on http://localhost:${PORT}`);
});