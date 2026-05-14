// dependencies
require("dotenv").config();
const express = require("express");

// app configuration
const app = express();
const PORT = process.env.PORT || 3001;

// server listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});