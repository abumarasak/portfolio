// Colors for console.log
require("colors");
// Load environment variables
require("dotenv").config();
// Database connection
require("./src/config/database")();
// Send Email
require("./src/utils/sendEmail");
// Express server
const express = require("express");
// Cors
const cors = require("cors");
// Morgan
const morgan = require("morgan");
// Helmet
const helmet = require("helmet");
// bodyParser
const bodyParser = require("body-parser");
// Error handler
const errorHandler = require("./src/middleware/errorHandler");
// Not found handler
const notFound = require("./src/middleware/notFound");
// Routes
const routes = require("./src/Routes");

// Server
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/v1", routes);

// Not found handler
app.use(notFound);

// Error handler
app.use(errorHandler);

// Export Server
module.exports = app;
